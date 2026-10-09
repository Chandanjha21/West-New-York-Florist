import type { AddOn, ColorInfo, FlowerType, OccasionInfo, Option, ProductType, SizeKey } from "@/types";
import { images } from "./media";

// Their own occasion list (westnewyorkflorist.com). Photos are stock placeholders.
export const occasions: OccasionInfo[] = [
  { key: "birthday", label: "Birthday", blurb: "Bright, joyful bouquets", image: images.celebrationGifts, href: "/shop?occasion=birthday" },
  { key: "anniversary", label: "Anniversary", blurb: "Roses that say it still", image: images.surpriseRoses, href: "/shop?occasion=anniversary" },
  { key: "love-romance", label: "Love & Romance", blurb: "Red roses and grand gestures", image: images.redRosesHands, href: "/shop?occasion=love-romance" },
  { key: "new-baby", label: "New Baby", blurb: "Soft, sweet welcomes", image: images.babyShower, href: "/shop?occasion=new-baby" },
  { key: "congratulations", label: "Congratulations", blurb: "For every big milestone", image: images.graduation, href: "/shop?occasion=congratulations" },
  { key: "get-well", label: "Get Well", blurb: "A cheerful lift", image: images.windowVase, href: "/shop?occasion=get-well" },
  { key: "thank-you", label: "Thank You", blurb: "Gratitude, beautifully said", image: images.thankYouCard, href: "/shop?occasion=thank-you" },
  { key: "thinking-of-you", label: "Thinking of You", blurb: "Quiet, caring gestures", image: images.whiteLiliesVase, href: "/shop?occasion=thinking-of-you" },
  { key: "im-sorry", label: "I'm Sorry", blurb: "When words aren't enough", image: images.singleRose, href: "/shop?occasion=im-sorry" },
  { key: "just-because", label: "Just Because", blurb: "The best reason of all", image: images.receivingFlowers, href: "/shop?occasion=just-because" },
];

export const flowerTypes: Option<FlowerType>[] = [
  { key: "roses", label: "Roses" },
  { key: "peonies", label: "Peonies" },
  { key: "tulips", label: "Tulips" },
  { key: "lilies", label: "Lilies" },
  { key: "orchids", label: "Orchids" },
  { key: "hydrangeas", label: "Hydrangeas" },
  { key: "mixed", label: "Mixed seasonal" },
  { key: "dried", label: "Dried & preserved" },
];

export const colors: ColorInfo[] = [
  { key: "red", label: "Red", swatch: "#9B1C2C" },
  { key: "pink", label: "Pink", swatch: "#E48CA4" },
  { key: "blush", label: "Blush", swatch: "#F2CFC6" },
  { key: "peach", label: "Peach", swatch: "#F4B48E" },
  { key: "white", label: "White & ivory", swatch: "#FFFDF8" },
  { key: "purple", label: "Purple", swatch: "#7E5A9B" },
  { key: "yellow", label: "Yellow", swatch: "#F2C94C" },
  { key: "mixed", label: "Mixed", swatch: "conic-gradient(#E48CA4,#F2C94C,#7E5A9B,#F4B48E,#E48CA4)" },
];

export const sizes: Option<SizeKey>[] = [
  { key: "standard", label: "Standard" },
  { key: "deluxe", label: "Deluxe" },
  { key: "premium", label: "Premium" },
];

export const productTypes: Option<ProductType>[] = [
  { key: "bouquet", label: "Bouquets" },
  { key: "arrangement", label: "Arrangements" },
  { key: "gift-box", label: "Gift boxes" },
  { key: "plant", label: "Plants" },
];

export const priceRanges: { key: string; label: string; min: number; max: number }[] = [
  { key: "0-75", label: "Under $75", min: 0, max: 75 },
  { key: "75-100", label: "$75 – $100", min: 75, max: 100 },
  { key: "100-150", label: "$100 – $150", min: 100, max: 150 },
  { key: "150-plus", label: "$150 & up", min: 150, max: Infinity },
];

export const sortOptions = [
  { key: "featured", label: "Featured" },
  { key: "newest", label: "Newest" },
  { key: "price-asc", label: "Price: low to high" },
  { key: "price-desc", label: "Price: high to low" },
] as const;

export const addOns: AddOn[] = [
  { id: "vase", name: "Keepsake ceramic vase", price: 24, description: "Hand-glazed ivory vase, sized to your bouquet", image: images.vase },
  { id: "chocolates", name: "Chocolates", price: 18, description: "A box of chocolates to go with the flowers", image: images.chocolates },
  { id: "balloon", name: "Celebration balloon", price: 10, description: "A mylar balloon tied to your arrangement", image: images.balloons },
  { id: "card", name: "Handwritten card", price: 0, description: "Your message, written by our florists", image: images.thankYouCard },
];
