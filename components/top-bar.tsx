"use client";

/**
 * Top Bar
 *
 * Page title, mobile hamburger, and connection status.
 */

import { usePathname } from "next/navigation";
import { pt } from "@/lib/i18n/pt";

const pageTitles: Record<string, string> = {
  "/dashboard": pt.nav.dashboard,
  "/campaigns": pt.nav.campaigns,
  "/campaigns/new": "Nova campanha",
  "/automations": pt.nav.campaigns,
  "/automations/new": "Nova campanha",
  "/logs": pt.nav.logs,
  "/settings": pt.nav.settings,
  "/diagnostics": pt.nav.diagnostics,
  "/overview": pt.nav.overview,
  "/inbox": pt.nav.inbox,
};

interface TopBarProps {
  onMenuClick: () => void;
  instagramUsername: string | null;
  instagramAccountCount: number;
}

export default function TopBar({
  onMenuClick,
  instagramUsername,
  instagramAccountCount,
}: TopBarProps) {
  const pathname = usePathname();
  const title =
    pageTitles[pathname] ??
    (pathname.startsWith("/campaigns/") ? "Campanha" : pt.nav.dashboard);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 h-16 px-4 lg:px-8 border-b border-border bg-background">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden shrink-0 px-2.5 py-1.5 rounded border border-border text-sm text-muted hover:text-foreground"
          aria-label={pt.menu}
        >
          {pt.menu}
        </button>
        <h1 className="truncate text-base font-semibold sm:text-lg">{title}</h1>
      </div>

      {instagramAccountCount > 0 ? (
        <p className="shrink-0 truncate text-sm text-muted">
          {instagramAccountCount > 1
            ? pt.accounts(instagramAccountCount)
            : `@${instagramUsername}`}
        </p>
      ) : (
        <a
          href="/api/instagram/connect"
          className="shrink-0 whitespace-nowrap text-sm font-medium px-3 py-1.5 rounded bg-accent text-white hover:bg-accent-hover"
        >
          {/* Full label needs more room than a 360px header has to spare. */}
          <span className="sm:hidden">{pt.connect}</span>
          <span className="hidden sm:inline">{pt.connectInstagram}</span>
        </a>
      )}
    </header>
  );
}
