import Link from "next/link";
import { BRAND, pt } from "@/lib/i18n/pt";

export const metadata = {
  title: `${pt.checkEmailTitle} — ${BRAND}`,
  description: pt.checkEmailBody,
};

export default function VerifyRequestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-foreground">{BRAND}</h1>
        </div>

        <div className="panel rounded p-8 text-center">
          <h2 className="text-lg font-semibold mb-2">{pt.checkEmailTitle}</h2>
          <p className="text-sm text-muted">{pt.checkEmailBody}</p>
          <p className="mt-6 text-sm">
            <Link href="/login" className="text-accent hover:underline">
              {pt.backToSignIn}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
