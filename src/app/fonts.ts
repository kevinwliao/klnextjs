import {
  Inter,
  Noto_Sans,
  Raleway,
  Noto_Sans_Display,
  Roboto,
} from "next/font/google";

// 8
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// 4
export const noto_sans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

// 7
export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const noto_sans_display = Noto_Sans_Display({
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
