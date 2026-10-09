import type { Metadata } from "next";
import { site } from "@/config/site";
import { getFeaturedProducts, getOccasions, getTestimonials, getWeddingGallery } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { StudioIntro } from "@/components/home/StudioIntro";
import { Occasions } from "@/components/home/Occasions";
import { FeaturedCarousel } from "@/components/home/FeaturedCarousel";
import { SympathyHighlight } from "@/components/home/SympathyHighlight";
import { CustomOrderHighlight } from "@/components/home/CustomOrderHighlight";
import { GalleryStrip } from "@/components/home/GalleryStrip";
import { VideoStories } from "@/components/home/VideoStories";
import { Testimonials } from "@/components/home/Testimonials";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { SectionHeading, Script } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  ...pageMetadata({ title: `Family-Owned Florist in ${site.address.city}, NJ`, description: site.description, path: "/" }),
  title: { absolute: `${site.name} | Family-Owned Florist in ${site.address.city}, NJ since ${site.established}` },
};

export default async function HomePage() {
  const [featured, occasions, testimonials, gallery] = await Promise.all([
    getFeaturedProducts(8),
    getOccasions(),
    getTestimonials(),
    getWeddingGallery(),
  ]);

  return (
    <>
      <Hero />
      <TrustStrip className="pt-14 md:pt-20" />
      <StudioIntro />
      <Occasions occasions={occasions} />

      <section className="section-y" aria-labelledby="featured-title">
        <div className="container-page flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="New arrivals & best sellers"
            title={<span id="featured-title">Customer <Script>favorites</Script></span>}
            intro="Our newest arrangements and best sellers, made to order in the shop with same-day delivery available."
          />
          <Magnetic className="shrink-0 self-start md:self-auto">
            <ButtonLink href="/shop" variant="outline">Shop all flowers</ButtonLink>
          </Magnetic>
        </div>
        <div className="mt-10">
          <FeaturedCarousel products={featured} />
        </div>
      </section>

      <SympathyHighlight />
      <CustomOrderHighlight />
      <GalleryStrip items={gallery} />
      <VideoStories />
      <Testimonials items={testimonials} />
    </>
  );
}
