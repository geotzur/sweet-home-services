-- Create subscriptions table for Stripe billing
create table if not exists public.subscriptions (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  stripe_customer_id    text not null,
  stripe_subscription_id text not null unique,
  plan          text not null check (plan in ('starter', 'growth', 'authority')),
  status        text not null default 'active'
                  check (status in ('active', 'past_due', 'canceled', 'incomplete')),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Index for fast user lookup
create index idx_subscriptions_user_id on public.subscriptions(user_id);
create index idx_subscriptions_stripe_customer on public.subscriptions(stripe_customer_id);

-- Enable Row Level Security
alter table public.subscriptions enable row level security;

-- Users can only read their own subscription
create policy "Users can view own subscription"
  on public.subscriptions
  for select
  using (auth.uid() = user_id);

-- Only service_role (server-side) can insert/update/delete
create policy "Service role manages subscriptions"
  on public.subscriptions
  for all
  using (auth.role() = 'service_role');

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_subscriptions_updated_at
  before update on public.subscriptions
  for each row execute function public.handle_updated_at();
