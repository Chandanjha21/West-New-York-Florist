import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { images, videos } from "@/data/media";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { ArchOutline, LeafDivider } from "@/components/ui/Botanicals";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, Script, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Clock, Leaf, Pin, Sparkle } from "@/components/ui/Icons";
import { MapPlaceholder } from "@/components/ui/MapPlaceholder";

export const metadata = pageMetadata({
  title: "Our Story",
  description: `${site.name} is a family-owned florist on Bergenline Avenue in ${site.address.city}, NJ, serving Hudson and Bergen County since ${site.established}.`,
  path: "/about",
});

const values = [
  { Icon: Leaf, title: "Family owned", text: `Family owned and operated since ${site.established}, right here on Bergenline Avenue.` },
  { Icon: Sparkle, title: "Every occasion", text: "Everyday bouquets, weddings and sympathy tributes, all designed in our own shop." },
  { Icon: Clock, title: "Here for the community", text: "Over 70 years of flowers for the families of Hudson and Bergen County." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-8 md:pt-12">
        <div className="container-page">
          <Eyebrow className="animate-rise">Our story</Eyebrow>
          <h1 className="mt-6 max-w-5xl animate-rise text-display font-light text-wine [animation-delay:120ms]">
            Doing flowers well on Bergenline Avenue, <Script>since {site.established}</Script>
          </h1>
        </div>
        <div className="container-page mt-16 grid gap-6 md:grid-cols-12">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem] md:col-span-8 md:aspect-auto md:min-h-[32rem]">
            <Image src={images.shopInterior.src} alt={images.shopInterior.alt} fill preload sizes="(min-width:768px) 66vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={120} className="relative aspect-[3/4] overflow-hidden arch md:col-span-4">
            <Image src={images.floristOveralls.src} alt={images.floristOveralls.alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="section-y" aria-labelledby="story-title">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={`Since ${site.established}`} title={<span id="story-title">A real, local <Script>family</Script> florist</span>} />
          </div>
          <Reveal delay={120} className="space-y-6 text-lead text-muted lg:col-span-6 lg:col-start-7">
            <p>
              {site.name} is a real, family owned and operated florist, and we&rsquo;ve been doing flowers very well since {site.established}.
              We&rsquo;re a local brick-and-mortar shop at {site.address.street}.
            </p>
            <p>
              For more than 70 years we&rsquo;ve served Hudson and Bergen County: birthday bouquets and anniversary roses, wedding
              florals, and sympathy tributes for the services that matter most.
            </p>
            <p>Stop by the shop, give us a call, or order online. Either way, your flowers are made by people who live and work here.</p>
          </Reveal>
        </div>
        <ul className="container-page mt-20 grid gap-10 md:grid-cols-3">
          {values.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 100} className="rounded-[var(--radius-card)] bg-cream/60 p-8 ring-1 ring-linen">
              <Icon size={28} className="text-rose-deep" />
              <p className="mt-6 font-display text-h3 text-wine">{title}</p>
              <p className="mt-3 text-muted">{text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section-y" aria-labelledby="visit-title">
        <div className="container-page grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <ArchOutline className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-gold" />
            <div className="relative aspect-[3/4] overflow-hidden arch bg-ink">
              <LazyVideo video={videos.handoff} />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading eyebrow="Visit the shop" title={<span id="visit-title">Come see us on <Script>Bergenline</Script></span>} intro="Pop in to choose an arrangement, talk through a wedding or sympathy order, or pick up your flowers." />
            <Reveal delay={120} className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-muted">Address</p>
                <p className="mt-2 flex gap-2 text-ink"><Pin size={18} className="mt-1 shrink-0 text-rose-deep" />{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.postalCode}</p>
              </div>
              <div>
                <p className="eyebrow text-muted">Hours</p>
                <ul className="mt-2 space-y-1 text-ink">
                  {site.hours.map((h) => <li key={h.days}>{h.days}: <span className="text-muted">{h.time}</span></li>)}
                </ul>
              </div>
            </Reveal>
            <MapPlaceholder className="mt-10 aspect-[16/9] w-full" />
            <LeafDivider className="mt-10 text-gold" />
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href="/events" variant="outline">Plan an event</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
