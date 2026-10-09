import type { Testimonial } from "@/types";

/*
 * Summaries of public Yelp reviews (paraphrased, not verbatim). Before launch, replace with
 * exact quotes the client is happy to feature, and add reviewer first names only with permission.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Great treatment and fair prices. They even carried the order out to the car.",
    name: "Yelp review",
    context: "In-store pickup",
  },
  {
    id: "t2",
    quote: "Delivered right on time, and the flowers were absolutely gorgeous.",
    name: "Yelp review",
    context: "Local delivery",
  },
  {
    id: "t3",
    quote: "Our Mother's Day arrangement looked even better in person than the photo online.",
    name: "Yelp review",
    context: "Local business, Mother's Day",
  },
  {
    id: "t4",
    quote: "A couple of years of ordering here, and the customer service is always excellent.",
    name: "Yelp review",
    context: "Returning customer",
  },
];
