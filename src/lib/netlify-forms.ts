/**
 * Submit a form to Netlify Forms.
 *
 * Netlify's build bot must have seen a matching form (same `name` + field
 * names) in a static HTML page at build time — see `public/__forms.html`.
 *
 * Submissions are only received on the deployed Netlify site. On `localhost`
 * this call will either 404 or receive the Next.js page HTML; callers should
 * treat failure as non-fatal (Supabase is the source of truth).
 */
export async function submitToNetlifyForm(
  formName: string,
  data: Record<string, string | null | undefined>,
): Promise<void> {
  const payload: Record<string, string> = { "form-name": formName };
  for (const [key, value] of Object.entries(data)) {
    if (value != null) payload[key] = String(value);
  }

  const body = new URLSearchParams(payload).toString();

  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) {
    throw new Error(`Netlify form submission failed: ${res.status}`);
  }
}
