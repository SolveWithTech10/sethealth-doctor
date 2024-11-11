import { StaticImageData } from "next/image";

export type ArtworkProptype = {
    mainImage: StaticImageData;
    mainImageAlt: string;
    title: string;
    subtitle: string;
  };