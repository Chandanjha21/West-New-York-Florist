import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { images } from "@/data/media";
import { sympathyCategories, sympathySiteUrl } from "@/data/sympathy";
import { ButtonLink } from "@/components/ui/Button";
import { LeafDivider, Sprig } from "@/components/ui/Botanicals";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Clock, Phone, Truck } from "@/components/ui/Icons";

export const metadata = pageMetadata({
  title: "Sympathy & Funeral Flowers",
  description: `Standing sprays, casket covers, wreaths, hearts and funeral baskets from ${site.name}, delivered to services across Hudson and Bergen County. Call ${site.phone}.`,
  path: "/sympathy",
});

const steps = [
  { Icon: Phone, title: "Call or visit us", text: `Tell us about the service and who the flowers are from. Call ${site.phone} or stop by the shop on Bergenline Avenue.` },
  { Icon: Truck, title: "We deliver to the service", text: "We deliver directly to the funeral home, church or family home across Hudson and Bergen County." },
  { Icon: Clock, title: "Unhurried, by your side", text: "We'll help you choose, explain the options, and take care of the details so you don't have to." },
];

export default function SympathyPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-8 md:pt-12">
        <Sprig className="pointer-events-none absolute right-4 top-0 w-24 text-sage/60 md:right-20 md:w-32" />
        <div className="container-page grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow className="animate-rise">Sympathy &amp; funeral flowers</Eyebrow>
            <h1 className="mt-6 animate-rise font-display text-h1 font-light text-wine [animation-delay:120ms]">
              Honoring a life, <span className="italic">gently</span>
            </h1>
            <p className="mt-6 max-w-xl animate-rise text-lead text-muted [animation-delay:240ms]">
              For more than 70 years, local families have trusted us with their farewell flowers. Whatever you need, from a single tribute
              to a complete set for the service, we&rsquo;ll guide you through it with care.
            </p>
            <div className="mt-10 flex animate-rise flex-wrap gap-4 [animation-delay:360ms]">
              <ButtonLink href={site.phoneHref}>Call {site.phone}</ButtonLink>
              <ButtonLink href="/contact" variant="outline">Send us a message</ButtonLink>
            </div>
          </div>
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] lg:col-span-5">
            <Image src={images.whiteLiliesVase.src} alt={images.whiteLiliesVase.alt} fill preload sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-cream/60" aria-labelledby="tributes-title">
        <div className="container-page">
          <SectionHeading
            eyebrow="Tributes we create"
            title={<span id="tributes-title">For the service and the home</span>}
            intro="Every tribute is designed in our shop. Call us for prices and to talk through colors, flowers and a card message."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-linen ring-1 ring-linen sm:grid-cols-2 lg:grid-cols-3">
            {sympathyCategories.map((c, i) => (
              <Reveal as="li" key={c.name} delay={(i % 3) * 80} className="bg-ivory p-7 md:p-8">
                <p className="font-display text-2xl text-wine">{c.name}</p>
                <span aria-hidden="true" className="mt-3 block h-px w-8 bg-gold/70" />
                <p className="mt-3 text-sm text-muted">{c.text}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Browse our full sympathy collection at{" "}
            <a href={sympathySiteUrl} target="_blank" rel="noreferrer" className="link-underline text-wine">
              westnewyorksympathy.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section-y" aria-labelledby="help-title">
        <div className="container-page">
          <SectionHeading align="center" eyebrow="How we help" title={<span id="help-title">We&rsquo;ll take care of the flowers</span>} />
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map(({ Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 100} className="text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-cream text-rose-deep ring-1 ring-gold/40">
                  <Icon size={22} />
                </span>
                <p className="mt-5 font-display text-2xl text-wine">{title}</p>
                <p className="mx-auto mt-3 max-w-xs text-muted">{text}</p>
              </Reveal>
            ))}
          </ul>
          <LeafDivider className="mx-auto mt-16 text-gold" />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href={site.phoneHref}>Call {site.phone}</ButtonLink>
            <ButtonLink href="/contact" variant="outline">Visit or message us</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
