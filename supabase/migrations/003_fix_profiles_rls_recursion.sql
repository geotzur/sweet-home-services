-- Fix infinite recursion in profiles RLS by using a SECURITY DEFINER helper.
-- The helper bypasses RLS on the inner profiles lookup, so admin checks
-- from other tables (orders, subscriptions, contacts, client_sites) no
-- longer cascade into a recursive profiles policy.

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

REVOKE ALL ON FUNCTION public.is_admin() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated, service_role;

-- profiles: replace self-referencing admin policy
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR SELECT
  USING (public.is_admin());

-- orders
DROP POLICY IF EXISTS "Admins can manage all orders" ON public.orders;
CREATE POLICY "Admins can manage all orders"
  ON public.orders FOR ALL
  USING (public.is_admin());

-- subscriptions
DROP POLICY IF EXISTS "Admins can manage all subscriptions" ON public.subscriptions;
CREATE POLICY "Admins can manage all subscriptions"
  ON public.subscriptions FOR ALL
  USING (public.is_admin());

-- contacts
DROP POLICY IF EXISTS "Admins can manage contacts" ON public.contacts;
CREATE POLICY "Admins can manage contacts"
  ON public.contacts FOR ALL
  USING (public.is_admin());

-- client_sites
DROP POLICY IF EXISTS "Admins can manage all sites" ON public.client_sites;
CREATE POLICY "Admins can manage all sites"
  ON public.client_sites FOR ALL
  USING (public.is_admin());
