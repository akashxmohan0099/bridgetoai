import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { SignOut, Mailbox } from "@phosphor-icons/react/dist/ssr";
import { isAdminAuthenticated } from "@/lib/adminSession";
import { getSupabaseAdmin, type ContactSubmission } from "@/lib/supabaseAdmin";
import { logoutAction } from "./actions";
import SubmissionRow from "./SubmissionRow";

export const metadata: Metadata = {
  title: "Admin — Bridge To AI",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

async function loadSubmissions(): Promise<{ data: ContactSubmission[]; error: string | null }> {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) return { data: [], error: error.message };
    return { data: (data as ContactSubmission[]) ?? [], error: null };
  } catch (err) {
    return { data: [], error: err instanceof Error ? err.message : "Unknown error" };
  }
}

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  const { data: submissions, error } = await loadSubmissions();
  const unreadCount = submissions.filter((s) => !s.read_at).length;

  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-10 border-b border-border bg-surface/85 backdrop-blur-xl">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-primary to-accent" />
            <span className="text-[15px] font-bold text-text">Bridge To AI</span>
            <span className="text-[13px] text-text-light ml-2">/ Admin</span>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-bg px-3.5 py-2 text-[13px] font-semibold text-text hover:border-primary/30 hover:bg-primary-light/40 transition-colors"
            >
              <SignOut size={14} weight="bold" /> Log out
            </button>
          </form>
        </div>
      </header>

      <main className="mx-auto max-w-[1000px] px-5 sm:px-8 py-10">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
          <div>
            <h1 className="text-[28px] font-bold tracking-[-0.02em] text-text">Contact submissions</h1>
            <p className="mt-1 text-[14px] text-text-muted">
              {submissions.length} total{unreadCount > 0 && <> &middot; <span className="text-primary font-semibold">{unreadCount} unread</span></>}
            </p>
          </div>
        </div>

        {error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
            <p className="text-[14px] font-semibold text-red-700">Couldn&apos;t load submissions</p>
            <p className="mt-1 text-[13px] text-red-600 break-words">{error}</p>
            <p className="mt-3 text-[12px] text-red-600/80">
              Check that <code className="font-mono">SUPABASE_SERVICE_ROLE_KEY</code> is set and the <code className="font-mono">contact_submissions</code> table exists.
            </p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="rounded-2xl border border-border bg-surface p-10 text-center">
            <Mailbox size={32} weight="duotone" className="text-text-light mx-auto" />
            <p className="mt-3 text-[15px] font-semibold text-text">No submissions yet</p>
            <p className="mt-1 text-[13px] text-text-muted">New contact form responses will appear here.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {submissions.map((s) => (
              <SubmissionRow key={s.id} submission={s} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
