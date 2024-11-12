import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type ArtworkProptype = {
    mainImage: StaticImageData;
    mainImageAlt: string;
    title: string;
    subtitle: string;
  };

export type TotalDataCardProptype = {
  children:ReactNode;
  title: string;
  totalNumbers: number;
  growth:number;
  iconBgColor: string;
  iconBorderColor:string;
}