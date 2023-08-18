import { Roboto_Slab } from "next/font/google";
import { Kalam } from "next/font/google";

export const roboto = Roboto_Slab({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const kalam = Kalam({
  weight: ["400"],
  subsets: ["latin"],
});
