import type { EventService, GalleryItem } from "@/types";
import { images } from "./media";

export const eventServices: EventService[] = [
  {
    id: "weddings",
    eyebrow: "Weddings & Engagements",
    title: "Florals for the day you will always remember",
    description:
      "Couples tell us we're easy to work with and made them feel comfortable from the very first consultation. We design bridal bouquets, ceremony florals and reception centerpieces that feel entirely yours.",
    bullets: ["Bridal & bridesmaid bouquets", "Ceremony and aisle florals", "Reception centerpieces", "Boutonnieres & corsages"],
    images: [images.bridePastel, images.aisle, images.receptionTable],
  },
  {
    id: "celebrations",
    eyebrow: "Celebrations",
    title: "Birthdays, showers, graduations & every milestone",
    description:
      "Table florals, balloons and statement arrangements for parties large and small, designed in our shop.",
    bullets: ["Baby & bridal showers", "Milestone birthdays", "Graduation parties", "Holiday dinners and seasonal décor"],
    images: [images.toast, images.balloons, images.weddingCake],
  },
];

export const weddingGallery: GalleryItem[] = [
  { id: "g1", ...images.brideSmelling, caption: "Ivory garden bouquet", tall: true },
  { id: "g2", ...images.coupleKiss, caption: "Petal toss send-off" },
  { id: "g3", ...images.brideRed, caption: "Burgundy & blush bridal", tall: true },
  { id: "g4", ...images.receptionTable, caption: "Long-table reception" },
  { id: "g5", ...images.brideVeil, caption: "Sage & white cascade", tall: true },
  { id: "g6", ...images.gazebo, caption: "Garden gazebo ceremony" },
  { id: "g7", ...images.coupleGarden, caption: "Garden portraits" },
  { id: "g8", ...images.brideRoses, caption: "Peach rose bouquet", tall: true },
  { id: "g9", ...images.chairs, caption: "Sweetheart chairs" },
  { id: "g10", ...images.brideField, caption: "Meadow greenery bouquet", tall: true },
  { id: "g11", ...images.coupleBeach, caption: "Coastal elopement" },
  { id: "g12", ...images.brideHair, caption: "Romantic hand-tied" },
];
