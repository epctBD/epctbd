import { StaticImageData } from "next/image";

export interface IService {
  title: string;
  description: string;
  slug: string;
  image: StaticImageData;
}
