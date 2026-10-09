import { videos } from "@/data/media";
import { site } from "@/config/site";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { ButtonLink } from "@/components/ui/Button";
import { CurveEdge } from "@/components/ui/Botanicals";
import { FloatingPetals, HeroScene, MaskWords } from "@/components/motion/HeroScene";
import { Magnetic } from "@/components/motion/Magnetic";

export function Hero() {
  return (
    <section className="on-dark relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-ink text-ivory" aria-labelledby="hero-title">
      <HeroScene
        background={
          <>
            <LazyVideo video={videos.heroFlorist} eager controlsClassName="bottom-16 md:bottom-24 right-4 md:right-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(43_34_36/0.45)_100%)]" />
          </>
        }
      >
        <p className="eyebrow animate-eyebrow-in text-ivory/85 [animation-delay:150ms]">
          Family-owned on Bergenline Avenue &middot; Since {site.established}
        </p>
        <h1 id="hero-title" className="mt-8 max-w-5xl font-display text-display font-light">
          <MaskWords text="Flowers done well," start={300} />
          <br />
          <MaskWords text="since" start={560} />
          <span className="inline-block animate-script-write font-script font-normal text-blush [animation-delay:760ms]">{site.established}</span>
        </h1>
        <p className="mt-8 max-w-xl animate-rise text-lead text-ivory/85 [animation-delay:1000ms]">
          Our Autumn Collection is here: bright, bold and vibrant. Fresh arrangements, wedding florals and sympathy tributes, with same-day delivery across Hudson and Bergen County.
        </p>
        <div className="mt-11 flex animate-rise flex-col gap-4 [animation-delay:1150ms] sm:flex-row">
          <Magnetic>
            <ButtonLink href="/shop" variant="light">Shop Flowers</ButtonLink>
          </Magnetic>
          <Magnetic>
            <ButtonLink href="/sympathy" variant="ghost-light">Sympathy Flowers</ButtonLink>
          </Magnetic>
        </div>
      </HeroScene>
      <FloatingPetals />

      <a href="#studio-title" aria-label="Scroll to our story" className="absolute bottom-16 left-4 hidden animate-rise flex-col items-center gap-3 text-ivory/70 [animation-delay:1500ms] md:bottom-24 md:left-10 md:flex">
        <span className="eyebrow text-[0.625rem]">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-ivory/25">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-cue bg-ivory" />
        </span>
      </a>

      <CurveEdge className="absolute inset-x-0 bottom-[-1px] text-ivory" />
    </section>
  );
}
