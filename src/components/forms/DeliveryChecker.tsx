"use client";

import { useId, useState } from "react";
import { site } from "@/config/site";
import { Check, Search, Truck } from "@/components/ui/Icons";

const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

/**
 * "Do we deliver to you?" Only confirms towns on the published list; anything else is told
 * to call, never refused, because the full list is longer than what we have here.
 */
export function DeliveryChecker() {
  const id = useId();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<{ town: string; known: boolean } | null>(null);

  return (
    <div className="rounded-[var(--radius-card)] bg-cream/60 p-6 ring-1 ring-linen md:p-8">
      <p className="flex items-center gap-2 eyebrow text-rose-deep">
        <Truck size={16} /> Delivery area
      </p>
      <h2 className="mt-3 font-display text-h3 text-wine">Do we deliver to you?</h2>
      <form
        className="mt-5 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const q = normalize(query);
          if (!q) return;
          const match = site.deliveryTowns.find((t) => normalize(t) === q);
          setResult({ town: match ?? query.trim(), known: !!match });
        }}
      >
        <label htmlFor={`${id}-town`} className="sr-only">Town</label>
        <input
          id={`${id}-town`}
          list={`${id}-towns`}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setResult(null);
          }}
          placeholder="Enter your town, e.g. Hoboken"
          autoComplete="address-level2"
          maxLength={60}
          className="min-h-12 w-full min-w-0 rounded-full bg-ivory px-5 ring-1 ring-linen placeholder:text-muted/80 focus:outline-none focus:ring-2 focus:ring-wine/60"
        />
        <datalist id={`${id}-towns`}>
          {site.deliveryTowns.map((t) => (
            <option key={t} value={t} />
          ))}
        </datalist>
        <button type="submit" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-wine text-ivory transition-colors hover:bg-wine-dark" aria-label="Check delivery">
          <Search size={18} />
        </button>
      </form>

      <div aria-live="polite" className="min-h-6">
        {result ? (
          result.known ? (
            <p className="mt-4 flex items-start gap-2 text-ink">
              <Check size={18} className="mt-1 shrink-0 text-sage-deep" />
              Yes, we deliver to {result.town}. Same-day delivery is often possible; call {site.phone} to check timing.
            </p>
          ) : (
            <p className="mt-4 text-ink">
              We deliver to around 90 towns across Hudson and Bergen County. Call{" "}
              <a href={site.phoneHref} className="link-underline text-wine">{site.phone}</a> and we&rsquo;ll confirm {result.town} for you.
            </p>
          )
        ) : null}
      </div>

      <p className="mt-5 text-sm text-muted">Including {site.deliveryTowns.join(", ")} and many more.</p>
    </div>
  );
}
