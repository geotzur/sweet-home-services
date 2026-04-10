import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "./supabase-server";

/**
 * Verify that the request has a valid Supabase auth session.
 * Returns the user on success, or a NextResponse error to return early.
 */
export async function verifyAdminAuth(
  request: Request,
): Promise<{ error: NextResponse } | { user: { id: string; email?: string } }> {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");

  if (!token) {
    return {
      error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  const {
    data: { user },
    error,
  } = await getSupabaseAdmin().auth.getUser(token);

  if (error || !user) {
    return {
      error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  return { user: { id: user.id, email: user.email } };
}
