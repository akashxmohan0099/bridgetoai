"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { destroyAdminSession, isAdminAuthenticated } from "@/lib/adminSession";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
}

export async function logoutAction(): Promise<void> {
  await destroyAdminSession();
  redirect("/admin/login");
}

export async function toggleReadAction(id: string, makeRead: boolean): Promise<void> {
  await requireAdmin();
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("contact_submissions")
    .update({ read_at: makeRead ? new Date().toISOString() : null })
    .eq("id", id);
  if (error) {
    console.error("toggleReadAction error:", error);
    throw new Error("Failed to update submission");
  }
  revalidatePath("/admin");
}

export async function deleteSubmissionAction(id: string): Promise<void> {
  await requireAdmin();
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
  if (error) {
    console.error("deleteSubmissionAction error:", error);
    throw new Error("Failed to delete submission");
  }
  revalidatePath("/admin");
}
