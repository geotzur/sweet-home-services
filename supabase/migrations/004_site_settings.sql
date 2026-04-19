-- Singleton site settings table (one row, id = 1).
CREATE TABLE IF NOT EXISTS public.site_settings (
  id            SMALLINT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  company_name  TEXT NOT NULL DEFAULT 'Sweet Home Services',
  support_email TEXT NOT NULL DEFAULT 'seo@sweethomeservices.org',
  phone_number  TEXT NOT NULL DEFAULT '(818) 230-6619',
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO public.site_settings (id) VALUES (1) ON CONFLICT (id) DO NOTHING;

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins manage site settings" ON public.site_settings;
CREATE POLICY "Admins manage site settings"
  ON public.site_settings FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP TRIGGER IF EXISTS set_site_settings_updated_at ON public.site_settings;
CREATE TRIGGER set_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
