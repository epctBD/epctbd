import { IService } from "@/models/services.model";
import image from "./architectural_design.png";
import electrical_design from "@/assets/images/electrical_design.png";
import environmental_study from "@/assets/images/environmental_study.png";
import land_acquisition from "@/assets/images/land_acquistion.png";
import planning_management from "@/assets/images/planning_management.png";
import plumbing_design from "@/assets/images/plumbing_design.png";
import road_infrastructure from "@/assets/images/road_infrastructure.png";
import soil_test from "@/assets/images/soil_test.png";
import structural_design from "@/assets/images/structural_design.png";
import surveying from "@/assets/images/surveying.png";

export const services: IService[] = [
  {
    title: "Architecture Design",
    description: "How we ensure quality and efficiency in every project.",
    serviceSlug: "architectural-design",
    image: image,
    service_type: [
      {
        name: "Architectural Planning & Detailing (Multi storied)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Architectural Planning & Detailing (Duplex/Resorts)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Landscaping",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "3D Visualization (Exterior)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "3D Visualization (Interior)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
    ],
  },
  {
    title: "Civil Engineering Design",
    description: "How we ensure quality and efficiency in every project.",
    serviceSlug: "civil-engineering-design",
    image: image,
    service_type: [
      {
        name: "Structural Design (RCC – Multi storied)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Structural Design (RCC – Duplex/Resorts)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Structural Design (Steel Shed)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Structural Design (Steel Multi Storied)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Structural Design (Masonry)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Retrofitting Design of Building",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Soil and Geo-technique ",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Road infrastructure.",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Water Resource Development. ",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Environmental and Morphological Study",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Slope Protection ",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
    ],
  },
  {
    title: "Electrical Engineering Design",
    description: "Analyzing soil properties to ensure stable foundations.",
    serviceSlug: "electrical-engineering-design",
    image: soil_test,
    service_type: [
      {
        name: "House wiring design",
        brief: "We will edit this section",
        photo: "will add later",
      },
      {
        name: "Consumer Census",
        brief: "We will edit this section",
        photo: "will add later",
      },
      {
        name: "Line work design",
        brief: "We will edit this section.",
        photo: "will add later",
      },
    ],
  },
  {
    title: "Plumbing Engineering Design",
    description: "Creating efficient water and waste systems.",
    serviceSlug: "plumbing-design",
    image: plumbing_design,
    service_type: [
      {
        name: "House wiring design",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Consumer Census",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Line Work Design",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
    ],
  },
  {
    title: "Planning",
    description: "Overseeing project execution and resource management.",
    serviceSlug: "planning",
    image: planning_management,
    service_type: [
      {
        name: "Land use",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Rural and Peri-urban",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Urban",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Feasibility Study. ",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Census",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
    ],
  },
  {
    title: "Surveying",
    description: "Measuring land and site features for accurate planning.",
    serviceSlug: "surveying",
    image: surveying,
    service_type: [
      {
        name: "Land Use Survey",
        brief: "We will edit this section.",
        photo: "will add later",
      },
      {
        name: "Topo-graphical Survey",
        brief: "We will edit this section.",
        photo: "will add later",
      },
      {
        name: "Contour Survey",
        brief: "We will edit this section.",
        photo: "will add later",
      },
      {
        name: "Route Survey",
        brief: "We will edit this section.",
        photo: "will add later",
      },
    ],
  },

  {
    title: "Management",
    description: "Overseeing project execution and resource Management.",
    serviceSlug: "management",
    image: planning_management,
    service_type: [
      {
        name: "Project Supervision. (Construction)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Project Supervision. (Interior)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Project planning & Management.",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
    ],
  },
  {
    title: "Land Acquisition",
    description: "Securing land rights for construction projects.",
    serviceSlug: "land-acquisition",
    image: land_acquisition,
    service_type: [
      {
        name: "Land Acquisition Plan",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Facility Services to Acquire Land",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Property Survey/Inspection/Valuation and Feasibility Study",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
    ],
  },
];
