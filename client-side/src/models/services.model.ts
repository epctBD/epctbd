import { StaticImageData } from "next/image";

export interface IService {
  title: string;
  description: string;
  serviceSlug: string;
  image: StaticImageData;
  service_type: IServiceType[];
}

export interface IServiceType {
  name: string;
  photo: string;
  brief: string;
}
