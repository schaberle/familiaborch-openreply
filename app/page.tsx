import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { BRAND, pt } from "@/lib/i18n/pt";

export const metadata: Metadata = {
  title: `${BRAND} — respostas automáticas no Instagram`,
  description: pt.tagline,
};

export default async function HomePage() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-foreground">{BRAND}</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">{pt.tagline}</p>
        </div>

        <div className="panel rounded p-8">
          <p className="text-sm leading-relaxed text-foreground">
            Use o painel para ligar o Instagram, escolher o post, a palavra-chave
            e a mensagem que vai no direct.
          </p>
          <Link
            href="/login"
            className="mt-6 inline-flex w-full items-center justify-center rounded bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            {pt.enter}
          </Link>
        </div>
      </div>
    </div>
  );
}
