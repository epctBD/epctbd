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
        brief:
          "Architectural Planning & Detailing (Multi-Storied) is the design and structuring of high-rise buildings, ensuring functionality, safety, and aesthetics with efficient space utilization and regulatory compliance.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885338/services_image/Architectural_Planning_Detailing_Multi_storied.png",
      },
      {
        name: "Architectural Planning & Detailing (Duplex/Resorts)",
        brief:
          "Architectural Planning & Detailing (Duplex/Resorts) involves designing luxurious and functional spaces with aesthetic appeal, efficient layouts, and seamless integration of nature, ensuring comfort, sustainability, and regulatory compliance.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1734378600/Architectural_Planning_Detailing_DuplexResorts_zbpbwe.jpg",
      },
      {
        name: "Landscaping",
        brief:
          "Landscaping involves designing and enhancing outdoor spaces with greenery, hardscapes, and water features to create aesthetically pleasing, functional, and sustainable environments.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1734378809/Landscaping_ahjgtu.jpg",
      },
      {
        name: "3D Visualization (Exterior)",
        brief:
          "3D Visualization (Exterior) creates immersive, photorealistic images of building exteriors, showcasing architectural details, materials, and landscaping to help clients visualize and approve design concepts.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1734378615/3d_Visualization_exterior_nfy2gl.jpg",
      },
      {
        name: "3D Visualization (Interior)",
        brief:
          "3D Visualization (Interior) is the creation of realistic digital representations of indoor spaces, showcasing design elements, lighting, textures, and materials for better visualization and planning.",
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
        brief:
          "Structural Design (RCC – Multi-Storied) involves designing reinforced concrete structures for multi-story buildings, ensuring safety, efficiency, and compliance with building codes and structural engineering standards.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888291/services_image/Structural_Design_%28RCC_Multi_storied%29.jpg",
      },
      {
        name: "Structural Design (RCC – Duplex/Resorts)",
        brief:
          "Structural Design (RCC – Duplex/Resorts) focuses on creating durable and stable reinforced concrete frameworks for duplexes and resorts, ensuring safety, aesthetics, and adaptability to environmental conditions.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888349/services_image/Structural_Design_%28RCC_DuplexResorts%29.jpg",
      },
      {
        name: "Structural Design (Steel Shed)",
        brief:
          "Structural Design (Steel Shed) involves designing lightweight yet strong steel frameworks for sheds, ensuring durability, cost-effectiveness, and adaptability for industrial, commercial, or agricultural use.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888538/services_image/Structural_Design_%28Steel_Shed%29.jpg",
      },
      {
        name: "Structural Design (Steel Multi Storied)",
        brief:
          "Structural Design (Steel Multi-Storied) involves engineering high-rise steel structures with optimal strength, flexibility, and durability, ensuring safety, load efficiency, and compliance with building standards.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888449/services_image/Structural_Design_%28Steel_Multi_Storied%29.jpg",
      },
      {
        name: "Structural Design (Masonry)",
        brief:
          "Structural Design (Masonry) involves designing load-bearing structures using brick, stone, or concrete blocks, ensuring strength, durability, and stability while maintaining cost-effectiveness and aesthetic appeal.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888208/services_image/Structural_Design_Masonry.jpg",
      },
      {
        name: "Retrofitting Design of Building",
        brief:
          "Retrofitting Design of Building involves strengthening existing structures to enhance durability, safety, and compliance with modern standards, addressing seismic resistance, load capacity, and material upgrades.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887519/services_image/Retrofitting_Design_of_Building.jpg",
      },
      {
        name: "Soil and Geo-technique",
        brief:
          "Soil and Geo-technique involves analyzing soil properties and underground conditions to ensure stable foundation design, ground improvement, and structural safety for construction projects.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888079/services_image/Soil_and_Geo_technique.jpg",
      },
      {
        name: "Road infrastructure",
        brief:
          "Road infrastructure involves designing and constructing roadways, bridges, and other transportation systems to ensure efficient movement of vehicles and pedestrians, while also considering safety, environmental impact, and cost-effectiveness.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887617/services_image/Road_infrastructure.png",
      },
      {
        name: "Water Resource Development",
        brief:
          "Water Resource Development involves planning, designing, and constructing water supply systems, including dams, reservoirs, and water treatment facilities, to ensure sustainable water management and infrastructure for communities.",
        photo:
          "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      },
      {
        name: "Environmental and Morphological Study",
        brief:
          "Environmental and Morphological Study involves analyzing the natural environment, including topography, hydrology, and vegetation, to inform sustainable development and infrastructure planning, ensuring compatibility with local ecosystems and regulatory standards.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885742/services_image/Environmental_and_Morphological_Study.jpg",
      },
      {
        name: "Slope Protection",
        brief:
          "Slope Protection involves designing and implementing protective measures for slopes, including retaining walls, erosion control structures, and vegetation, to ensure stability, safety, and environmental compatibility.",
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
        brief:
          "House wiring design involves designing electrical systems for residential buildings, ensuring safety, efficiency, and compliance with building codes and electrical standards.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736886083/services_image/House_wiring_design.jpg",
      },
      {
        name: "Consumer Census",
        brief:
          "Consumer Census involves collecting and analyzing data on electrical consumption patterns, energy efficiency, and demand for power, to inform infrastructure planning and resource allocation for sustainable development.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885493/services_image/Consumer_Census.jpg",
      },
      {
        name: "Line work design",
        brief:
          "Line work design involves designing electrical systems for industrial and commercial buildings, ensuring safety, efficiency, and compliance with building codes and electrical standards.",
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
        brief:
          "House Wiring Design involves designing plumbing systems for residential buildings, ensuring safety, efficiency, and compliance with building codes and plumbing standards.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887165/services_image/Plumbing_House_wiring_design.png",
      },
      {
        name: "Consumer Census",
        brief:
          "Consumer Census involves collecting and analyzing data on water consumption patterns, efficiency, and demand for water, to inform infrastructure planning and resource allocation for sustainable development.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887053/services_image/Plumbing_Consumer_Census.jpg",
      },
      {
        name: "Line Work Design",
        brief:
          "Line Work Design involves designing plumbing systems for industrial and commercial buildings, ensuring safety, efficiency, and compliance with building codes and plumbing standards.",
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
        brief:
          "Land use planning involves analyzing the physical, social, and economic characteristics of an area to determine the most appropriate land use for sustainable development, ensuring compatibility with local regulations and infrastructure.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736886783/services_image/Land_use_planning.jpg",
      },
      {
        name: "Rural and Peri-urban",
        brief:
          "Rural and Peri-urban planning focuses on developing rural areas and peri-urban zones, ensuring sustainable growth, infrastructure, and community development, while preserving natural resources and cultural heritage.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887953/services_image/Rural_and_Peri_urban.jpg",
      },
      {
        name: "Urban",
        brief:
          "Urban planning involves designing and managing urban areas, including residential, commercial, and industrial zones, to ensure efficient use of land, infrastructure, and public spaces, while also considering environmental sustainability and community needs.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg",
      },
      {
        name: "Feasibility Study",
        brief:
          "Feasibility Study involves analyzing the technical, economic, and environmental aspects of a project to determine its viability and potential for success, ensuring that the project aligns with the client's goals and objectives.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736886042/services_image/Feasibility_Study.jpg",
      },
      {
        name: "Census",
        brief:
          "Census involves collecting and analyzing data on population, housing, and economic activities to inform infrastructure planning, resource allocation, and community development, ensuring compatibility with local regulations and sustainable growth.",
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
        brief:
          "Land Use Survey involves analyzing the physical, social, and economic characteristics of an area to determine the most appropriate land use for sustainable development, ensuring compatibility with local regulations and infrastructure.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736886828/services_image/Land_uses_Survey.jpg",
      },
      {
        name: "Topo-graphical Survey",
        brief:
          "Topo-graphical Survey involves creating detailed maps and profiles of an area's topography, including elevation, slope, and geological features, to support infrastructure planning, land development, and environmental assessment.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888911/services_image/Topo_graphical_Survey.jpg",
      },
      {
        name: "Contour Survey",
        brief:
          "Contour Survey involves creating detailed maps and profiles of an area's topography, including elevation, slope, and geological features, to support infrastructure planning, land development, and environmental assessment.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885522/services_image/Contour_Survey.jpg",
      },
      {
        name: "Route Survey",
        brief:
          "Route Survey involves creating detailed maps and profiles of an area's topography, including elevation, slope, and geological features, to support infrastructure planning, land development, and environmental assessment.",
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
        brief:
          "Project Supervision (Construction) involves overseeing the construction process, ensuring quality, safety, and compliance with project specifications, while also managing resources and timelines for successful completion.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887359/services_image/Project_Supervision_%28Construction%29.jpg",
      },
      {
        name: "Project Supervision. (Interior)",
        brief:
          "Project Supervision (Interior) involves overseeing the interior design process, ensuring quality, safety, and compliance with project specifications, while also managing resources and timelines for successful completion.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887422/services_image/Project_Supervision_%28Interior_Design%29.jpg",
      },
      {
        name: "Project planning & Management.",
        brief:
          "Project Planning & Management involves overseeing the project planning process, ensuring quality, safety, and compliance with project specifications, while also managing resources and timelines for successful completion.",
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
        brief:
          "Land Acquisition Plan involves creating a detailed plan for acquiring land for construction projects, including identifying potential sites, negotiating with landowners, and obtaining necessary permits and approvals.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736886634/services_image/Land_Acquisition_Plan.png",
      },
      {
        name: "Facility Services to Acquire Land",
        brief:
          "Facility Services to Acquire Land involves providing comprehensive support services to acquire land for construction projects, including site selection, negotiation, and documentation, ensuring compliance with local regulations and project requirements.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736885887/services_image/Facility_Services_to_Acquire_Land.jpg",
      },
      {
        name: "Property Survey/Inspection/Valuation and Feasibility Study",
        brief:
          "Property Survey/Inspection/Valuation and Feasibility Study involves conducting a comprehensive survey of a property, including its physical condition, value, and potential for development, to inform project planning and decision-making.",
        photo:
          "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736887463/services_image/Property_SurveyInspection_Valuation_and_Feasibility_study.jpg",
      },
    ],
  },
];
