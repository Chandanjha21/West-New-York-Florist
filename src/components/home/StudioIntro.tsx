import Image from "next/image";
import { images } from "@/data/media";
import { site } from "@/config/site";
import { ArchOutline, Sprig } from "@/components/ui/Botanicals";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, Script } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function StudioIntro() {
  return (
    <section className="section-y relative overflow-hidden" aria-labelledby="studio-title">
      <div className="container-page grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <ArchOutline className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-gold" />
          <div className="relative aspect-[3/4] overflow-hidden arch">
            <Image src={images.floristWindow.src} alt={images.floristWindow.alt} fill sizes="(min-width:1024px) 38vw, 90vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-4 hidden w-44 overflow-hidden rounded-[1.25rem] shadow-soft ring-8 ring-ivory sm:block md:-right-10 md:w-52">
            <div className="relative aspect-square">
              <Image src={images.floristHands.src} alt={images.floristHands.alt} fill sizes="208px" className="object-cover" />
            </div>
          </div>
        </Reveal>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <Sprig className="pointer-events-none absolute -right-4 -top-16 hidden w-24 text-sage lg:block" />
          <Reveal>
            <Eyebrow>Our shop, since {site.established}</Eyebrow>
            <h2 id="studio-title" className="mt-6 text-h1 text-wine">
              A neighborhood florist,
              <br />
              <Script>family</Script> run
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-xl text-lead text-muted">
              {site.name} is a real, local brick-and-mortar shop on Bergenline Avenue, family owned and operated since {site.established}.
              For more than 70 years we&rsquo;ve done flowers for Hudson and Bergen County: birthdays and anniversaries, weddings, and the
              sympathy tributes that matter most.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-y border-linen py-8">
            {[
              [String(site.established), "Family-owned since"],
              ["70+", "Years serving locally"],
              [`${site.reviews.rating}★`, `${site.reviews.count} ${site.reviews.source} reviews`],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-4xl text-wine">{n}</p>
                <p className="mt-1 text-sm text-muted">{l}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={260} className="mt-10">
            <ButtonLink href="/about" variant="outline">Our story</ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
