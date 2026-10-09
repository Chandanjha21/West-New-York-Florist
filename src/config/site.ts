/**
 * Single source of truth for the business identity.
 * Change these values to rebrand the whole site for a different florist.
 */
export const site = {
  name: "West New York Florist",
  shortName: "West New York Florist",
  /** Two-line wordmark used by the logo. */
  wordmark: { primary: "West New York", secondary: "Florist" },
  tagline: "Family-owned since 1952",
  description:
    "Family-owned florist on Bergenline Avenue since 1952. Fresh bouquets, sympathy and funeral flowers, and wedding florals, with same-day delivery across Hudson and Bergen County.",
  url: "https://westnewyorkflorist.example.com",
  // Their website says 1952; Yelp lists 1958. Confirm with the client.
  established: 1952,
  phone: "(201) 854-4332",
  phoneHref: "tel:+12018544332",
  /** Not published by the business; the contact form is used instead. */
  email: null as string | null,
  address: {
    street: "5922 Bergenline Ave",
    city: "West New York",
    region: "NJ",
    postalCode: "07093",
    country: "US",
  },
  /** Opens Google Maps on the shop's address. */
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=West+New+York+Florist%2C+5922+Bergenline+Ave%2C+West+New+York%2C+NJ+07093",
  hours: [
    { days: "Monday – Saturday", time: "9:00 am – 7:00 pm", schema: "Mo-Sa 09:00-19:00" },
    { days: "Sunday", time: "10:00 am – 5:00 pm", schema: "Su 10:00-17:00" },
  ],
  /** Public review summary (Yelp). Verify the numbers before launch. */
  reviews: { rating: 4.9, count: 65, source: "Yelp" },
  /** Towns named on their delivery list (they list around 90 in total). */
  deliveryTowns: [
    "West New York",
    "Hoboken",
    "Jersey City",
    "Union City",
    "Weehawken",
    "Edgewater",
    "Fort Lee",
    "North Bergen",
    "Hackensack",
    "Paramus",
    "Montclair",
    "Newark",
  ],
  /** Business rules enforced by the server (see src/server/services/delivery.ts). */
  timeZone: "America/New_York",
  sameDayCutoffHour: 14,
  maxDaysAhead: 90,
  currency: "usd",
  /** Dollars, for display. The server converts to cents. */
  freeDeliveryOver: 100,
  deliveryFee: 15,
  /** Only links we have confirmed. Add their Facebook and Yelp page URLs when the client shares them. */
  social: {
    instagram: "https://www.instagram.com/wnyflorist/",
  } as Record<string, string>,
} as const;

export type Site = typeof site;
