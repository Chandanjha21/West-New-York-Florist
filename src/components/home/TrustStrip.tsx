import { site } from "@/config/site";
import { Leaf, Shield, Sparkle, Truck } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const items = [
  { Icon: Leaf, title: `Family-owned since ${site.established}`, text: "A real brick-and-mortar florist on Bergenline Avenue, family owned and operated." },
  { Icon: Sparkle, title: `${site.reviews.rating}★ on ${site.reviews.source}`, text: `Rated ${site.reviews.rating} out of 5 across ${site.reviews.count} customer reviews.` },
  { Icon: Truck, title: "Same-day delivery", text: "Hand-delivered across Hudson and Bergen County. Call us to check timing for today." },
  { Icon: Shield, title: "70+ years local", text: "Serving Hudson and Bergen County with everyday flowers, weddings and sympathy tributes." },
];

export function TrustStrip({ className }: { className?: string }) {
  return (
    <section aria-label="Why customers choose us" className={cn("container-page", className)}>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {items.map(({ Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 90} className="flex flex-col items-center text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-cream text-rose-deep ring-1 ring-gold/40">
              <Icon size={24} />
            </span>
            <p className="mt-5 font-display text-2xl text-wine">{title}</p>
            <span aria-hidden="true" className="mt-3 h-px w-8 bg-gold/60" />
            <p className="mt-3 max-w-[16rem] text-sm text-muted">{text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
