import Image from "next/image";
import { site } from "@/config/site";
import { images } from "@/data/media";
import { sympathyCategories } from "@/data/sympathy";
import { ButtonLink } from "@/components/ui/Button";
import { CurveEdge, Sprig } from "@/components/ui/Botanicals";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Calm homepage band for sympathy and funeral flowers (a core part of the business). */
export function SympathyHighlight() {
  const highlights = ["Standing Sprays", "Casket Covers", "Wreaths", "Funeral Baskets", "For the Home"];
  return (
    <section className="on-dark relative text-ivory" aria-labelledby="sympathy-title">
      <CurveEdge className="text-wine" />
      <div className="relative overflow-hidden bg-wine">
        <Sprig className="pointer-events-none absolute -right-6 top-10 w-40 -scale-x-100 text-ivory/10 md:w-52" />
        <div className="container-page section-y grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden arch ring-1 ring-ivory/20 ring-offset-8 ring-offset-wine">
              <Image src={images.whiteLily.src} alt={images.whiteLily.alt} fill sizes="(min-width:1024px) 38vw, 90vw" className="object-cover" />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow tone="light">Sympathy &amp; funeral flowers</Eyebrow>
              <h2 id="sympathy-title" className="mt-6 text-h1">
                Gentle tributes, <span className="font-display italic text-blush">handled with care</span>
              </h2>
              <p className="mt-6 max-w-lg text-lead text-ivory/80">
                When you&rsquo;re saying goodbye, we take care of the flowers. From standing sprays and casket covers to a basket for the family
                home, delivered to the service anywhere across Hudson and Bergen County.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <ul className="mt-10 divide-y divide-ivory/15 border-y border-ivory/15">
                {sympathyCategories
                  .filter((c) => highlights.includes(c.name))
                  .map((c) => (
                    <li key={c.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <p className="font-display text-2xl">{c.name}</p>
                      <p className="text-sm text-ivory/70 sm:max-w-xs sm:text-right">{c.text}</p>
                    </li>
                  ))}
              </ul>
            </Reveal>
            <Reveal delay={220} className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/sympathy" variant="light">Sympathy flowers</ButtonLink>
              <ButtonLink href={site.phoneHref} variant="ghost-light" icon={false}>Call {site.phone}</ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
      <CurveEdge flip className="text-wine" />
    </section>
  );
}
