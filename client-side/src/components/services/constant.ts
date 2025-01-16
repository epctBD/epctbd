import { IService } from "@/models/services.model";
import image from "./architectural_design.png";
import electrical_design from "@/assets/images/electrical_design.png";
import land_acquisition from "@/assets/images/land_acquistion.png";
import planning_management from "@/assets/images/planning_management.png";
import plumbing_design from "@/assets/images/plumbing_design.png";
import civil_engg from "@/assets/images/civil_engg.png";
import surveying from "@/assets/images/surveying.png";
import management from "@/assets/images/management.png";

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
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885338/services_image/Architectural_Planning_Detailing_Multi_storied.png",
      },
      {
        name: "Architectural Planning & Detailing (Duplex/Resorts)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1734378600/Architectural_Planning_Detailing_DuplexResorts_zbpbwe.jpg",
      },
      {
        name: "Landscaping",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1734378809/Landscaping_ahjgtu.jpg",
      },
      {
        name: "3D Visualization (Exterior)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1734378615/3d_Visualization_exterior_nfy2gl.jpg",
      },
      {
        name: "3D Visualization (Interior)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1734378597/3d_Visualization_interior_zf0q0c.jpg",
      },
    ],
  },
  {
    title: "Civil Engineering",
    description: "How we ensure quality and efficiency in every project.",
    serviceSlug: "civil-engineering-design",
    image: civil_engg,
    service_type: [
      {
        name: "Structural Design (RCC – Multi storied)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888291/services_image/Structural_Design_%28RCC_Multi_storied%29.jpg",
      },
      {
        name: "Structural Design (RCC – Duplex/Resorts)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888349/services_image/Structural_Design_%28RCC_DuplexResorts%29.jpg",
      },
      {
        name: "Structural Design (Steel Shed)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888538/services_image/Structural_Design_%28Steel_Shed%29.jpg",
      },
      {
        name: "Structural Design (Steel Multi Storied)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888449/services_image/Structural_Design_%28Steel_Multi_Storied%29.jpg",
      },
      {
        name: "Structural Design (Masonry)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888208/services_image/Structural_Design_Masonry.jpg",
      },
      {
        name: "Retrofitting Design of Building",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887519/services_image/Retrofitting_Design_of_Building.jpg",
      },
      {
        name: "Soil and Geo-technique",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888079/services_image/Soil_and_Geo_technique.jpg",
      },
      {
        name: "Road infrastructure",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887617/services_image/Road_infrastructure.png",
      },
      {
        name: "Water Resource Development",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Environmental and Morphological Study",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885742/services_image/Environmental_and_Morphological_Study.jpg",
      },
      {
        name: "Slope Protection",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888007/services_image/Slope_Protection.jpg",
      },
    ],
  },
  {
    title: "Electrical Engineering Design",
    description: "Planning electrical systems for safety and efficiency.",
    serviceSlug: "electrical-engineering-design",
    image: electrical_design,
    service_type: [
      {
        name: "House wiring design",
        brief: "We will edit this section",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736886083/services_image/House_wiring_design.jpg",
      },
      {
        name: "Consumer Census",
        brief: "We will edit this section",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885493/services_image/Consumer_Census.jpg",
      },
      {
        name: "Line work design",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885621/services_image/Electrical_Line_work_design.png",
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
        name: "House Wiring Design",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887165/services_image/Plumbing_House_wiring_design.png",
      },
      {
        name: "Consumer Census",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887053/services_image/Plumbing_Consumer_Census.jpg",
      },
      {
        name: "Line Work Design",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885621/services_image/Electrical_Line_work_design.png",
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
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736886783/services_image/Land_use_planning.jpg",
      },
      {
        name: "Rural and Peri-urban",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887953/services_image/Rural_and_Peri_urban.jpg",
      },
      {
        name: "Urban",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg",
      },
      {
        name: "Feasibility Study",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736886042/services_image/Feasibility_Study.jpg",
      },
      {
        name: "Census",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885448/services_image/Census_planning.jpg",
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
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736886828/services_image/Land_uses_Survey.jpg",
      },
      {
        name: "Topo-graphical Survey",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888911/services_image/Topo_graphical_Survey.jpg",
      },
      {
        name: "Contour Survey",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885522/services_image/Contour_Survey.jpg",
      },
      {
        name: "Route Survey",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887927/services_image/Route_Survey.jpg",
      },
    ],
  },

  {
    title: "Management",
    description: "Overseeing project execution and resource Management.",
    serviceSlug: "management",
    image: management,
    service_type: [
      {
        name: "Project Supervision. (Construction)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887359/services_image/Project_Supervision_%28Construction%29.jpg",
      },
      {
        name: "Project Supervision. (Interior)",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887422/services_image/Project_Supervision_%28Interior_Design%29.jpg",
      },
      {
        name: "Project planning & Management.",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887308/services_image/Project_planning_Management.png",
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
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736886634/services_image/Land_Acquisition_Plan.png",
      },
      {
        name: "Facility Services to Acquire Land",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885887/services_image/Facility_Services_to_Acquire_Land.jpg",
      },
      {
        name: "Property Survey/Inspection/Valuation and Feasibility Study",
        brief: "We will edit this section.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887463/services_image/Property_SurveyInspection_Valuation_and_Feasibility_study.jpg",
      },
    ],
  },
];
