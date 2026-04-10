-- ============================================================
-- Migration 002: Orders table + Subscriptions updates
--
-- 1. Create orders table (for onboarding submissions)
-- 2. Update subscriptions: nullable user_id, add 'basic' plan,
--    add customer_email + order_id columns
-- ============================================================

-- ─── 1. Orders table ────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.orders (
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan                   TEXT NOT NULL,
  status                 TEXT NOT NULL DEFAULT 'pending_payment'
                           CHECK (status IN ('pending_payment', 'paid', 'in_progress', 'completed', 'canceled')),
  business_name          TEXT NOT NULL,
  email                  TEXT NOT NULL,
  phone                  TEXT,
  address                TEXT,
  website_url            TEXT,
  industry               TEXT,
  services               TEXT,
  areas_covered          TEXT,
  logo_url               TEXT,
  brand_colors           TEXT,
  requirements           TEXT,
  stripe_session_id      TEXT,
  stripe_subscription_id TEXT,
  created_at             TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at             TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_orders_email ON public.orders(email);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);

-- RLS
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Anyone can create orders (onboarding form uses anon key)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'orders' AND policyname = 'Anyone can create orders'
  ) THEN
    CREATE POLICY "Anyone can create orders"
      ON public.orders FOR INSERT WITH CHECK (true);
  END IF;
END $$;

-- Allow SELECT so .insert().select("id") works in onboarding
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'orders' AND policyname = 'Anyone can read orders'
  ) THEN
    CREATE POLICY "Anyone can read orders"
      ON public.orders FOR SELECT USING (true);
  END IF;
END $$;

-- Auto-update updated_at (reuses handle_updated_at from migration 001)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'set_orders_updated_at'
  ) THEN
    CREATE TRIGGER set_orders_updated_at
      BEFORE UPDATE ON public.orders
      FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
  END IF;
END $$;


-- ─── 2. Subscriptions table updates ─────────────────────────

-- Make user_id nullable (clients don't have accounts)
ALTER TABLE public.subscriptions ALTER COLUMN user_id DROP NOT NULL;

-- Drop FK to auth.users so null user_id is fully optional
ALTER TABLE public.subscriptions DROP CONSTRAINT IF EXISTS subscriptions_user_id_fkey;
ALTER TABLE public.subscriptions
  ADD CONSTRAINT subscriptions_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL;

-- Expand plan check to include 'basic'
ALTER TABLE public.subscriptions DROP CONSTRAINT IF EXISTS subscriptions_plan_check;
ALTER TABLE public.subscriptions
  ADD CONSTRAINT subscriptions_plan_check
  CHECK (plan IN ('basic', 'starter', 'growth', 'authority'));

-- Add customer_email for identification without profiles lookup
ALTER TABLE public.subscriptions ADD COLUMN IF NOT EXISTS customer_email TEXT;

-- Add order_id FK to link subscription to the originating order
ALTER TABLE public.subscriptions ADD COLUMN IF NOT EXISTS order_id UUID REFERENCES public.orders(id) ON DELETE SET NULL;
CREATE INDEX IF NOT EXISTS idx_subscriptions_order_id ON public.subscriptions(order_id);
