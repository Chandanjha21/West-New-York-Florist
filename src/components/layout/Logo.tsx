import Link from "next/link";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import { Blossom } from "@/components/ui/Botanicals";

/**
 * Classic two-line wordmark: "WEST NEW YORK" over "— FLORIST · EST. 1952 —".
 * The compact variant (sticky/mobile header) drops the year so it fits narrow screens.
 */
export function Logo({ className, tone = "dark", compact = false }: { className?: string; tone?: "dark" | "light"; compact?: boolean }) {
  const { primary, secondary } = site.wordmark;
  const rule = cn("h-px flex-1", tone === "light" ? "bg-ivory/40" : "bg-gold/70");
  return (
    <Link
      href="/"
      className={cn("group inline-flex flex-col items-stretch leading-none", tone === "light" ? "text-ivory" : "text-wine", className)}
      aria-label={`${site.name}, home`}
    >
      <span className={cn("font-display uppercase", compact ? "text-[1.0625rem] tracking-[0.2em] sm:text-xl sm:tracking-[0.24em]" : "text-2xl tracking-[0.24em] md:text-[1.75rem]")}>
        {primary}
      </span>
      <span className={cn("flex items-center gap-2", compact ? "mt-1" : "mt-2")}>
        <span aria-hidden="true" className={rule} />
        <Blossom className={cn("shrink-0 text-rose transition-transform duration-1000 ease-(--ease-bloom) group-hover:rotate-[72deg]", compact ? "size-3" : "size-3.5")} />
        <span className={cn("eyebrow shrink-0 tracking-[0.34em]", compact ? "text-[0.5625rem]" : "text-[0.625rem]", tone === "light" ? "text-ivory/80" : "text-muted")}>
          {secondary}
          {!compact ? <> &middot; Est. {site.established}</> : null}
        </span>
        <Blossom className={cn("shrink-0 text-rose transition-transform duration-1000 ease-(--ease-bloom) group-hover:-rotate-[72deg]", compact ? "size-3" : "size-3.5")} />
        <span aria-hidden="true" className={rule} />
      </span>
    </Link>
  );
}
