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
    slug: "architectural-design",
    image: image,
    service_type: [
      {
        name: "Architectural Planning & Detailing (Multi storied)",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Architectural Planning & Detailing (Duplex/Resorts)",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Landscaping",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "3D Visualization (Exterior)",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "3D Visualization (Interior)",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
    ],
  },
  {
    title: "Civil Engineering Design",
    description: "How we ensure quality and efficiency in every project.",
    slug: "civil-engineering-design",
    image: image,
    service_type: [
      {
        name: "Structural Design (RCC – Multi storied)",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Structural Design (RCC – Duplex/Resorts)",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Structural Design (Steel Shed)",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Structural Design (Steel Multi Storied)",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Structural Design (Masonry)",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Retrofitting Design of Building",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Soil and Geo-technique ",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Road infrastructure.",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Water Resource Development. ",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Environmental and Morphological Study",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
      {
        name: "Slope Protection ",
        brief: "We will edit this section.",
        photo: "asdasd",
      },
    ],
  },
  {
    title: "Electrical Engineering Design",
    description: "Analyzing soil properties to ensure stable foundations.",
    slug: "electrical-engineering-design",
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
    slug: "plumbing-design",
    image: plumbing_design,
    service_type: [
      {
        name: "House wiring design",
        brief: "We will edit this section.",
        photo: "We will add later", 
      },
      {
        name: "Consumer Census",
        brief: "We will edit this section.",
        photo: "We will add later",
      },
      {
        name: "Line Work Design",
        brief: "We will edit this section.",
        photo: "We will add later",
      },
    ],
  },
  {
    title: "Planning",
    description: "Overseeing project execution and resource management.",
    slug: "planning",
    image: planning_management,
    service_type: [
      {
        name: "Land use",
        brief: "We will edit this section.",
        photo: "we will add later",
      },
      {
        name: "Rural and Peri-urban",
        brief: "We will edit this section.",
        photo: "we will add later",
      },
      {
        name: "Urban",
        brief: "We will edit this section.",
        photo: "we will add later",
      },
      {
        name: "Feasibility Study. ",
        brief: "We will edit this section.",
        photo: "we will add later",
      },
      {
        name: "Census",
        brief: "We will edit this section.",
        photo: "we will add later",
      },
    ],
  },
  {
    title: "Surveying",
    description: "Measuring land and site features for accurate planning.",
    slug: "surveying",
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
    slug: "management",
    image: planning_management,
    service_type: [
      {
        name: "Project Supervision. (Construction)",
        brief: "We will edit this section.",
        photo: "we will add later",
      },
      {
        name: "Project Supervision. (Interior)",
        brief: "We will edit this section.",
        photo: "we will add later",
      },
      {
        name: "Project planning & Management.",
        brief: "We will edit this section.",
        photo: "we will add later",
      },
    ],
  },
  {
    title: "Land Acquisition",
    description: "Securing land rights for construction projects.",
    slug: "land-acquisition",
    image: land_acquisition,
    service_type: [
      {
        name: "Land Acquisition Plan",
        brief: "We will edit this section.",
        photo: "we will add later",
      },
      {
        name: "Facility Services to Acquire Land",
        brief: "We will edit this section.",
        photo: "we will add later",
      },
      {
        name: "Property Survey/Inspection/Valuation and Feasibility Study",
        brief: "We will edit this section.",
        photo: "we will add later",
      },
    ],
  },
];
