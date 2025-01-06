import blogImg from "../../../../public/images/blog-image.png";
import blogImg1 from "../../../../public/Carousel/1.png";
import blogImg2 from "../../../../public/Carousel/2.png";

// Define the Blog interface
export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
}

export const blogData: Blog[] = [
  {
    id: 1,
    title: "Tolstoy provides an authentic interaction",
    description:
      "Tolstoy provides an authentic interaction without actually conversing. It allows us to meet shoppers where they are, show them what they'd like to see, and engage them more with our brand. Tolstoy isn't just a nice to have; it's a must-have.",
    image: blogImg.src,
    type: "Blog",
  },
  {
    id: 2,
    title: "The Future of AI in Marketing",
    description:
      "AI technology is revolutionizing the way businesses approach marketing. From personalized ads to customer service automation, AI is enhancing every aspect of digital marketing.",
    image: blogImg1.src,
    type: "Tech",
  },
  {
    id: 3,
    title: "How to Improve Your SEO Strategy in 2024",
    description:
      "SEO is a constantly evolving field. With new algorithm updates and changes to search engine behavior, staying up-to-date is crucial. Here's how you can adapt your SEO strategy for success in 2024.",
    image: blogImg2.src,
    type: "Marketing",
  },
  {
    id: 4,
    title: "The Impact of Social Media on Modern Business",
    description:
      "Social media has transformed how businesses connect with their audiences. From influencer marketing to targeted advertising, platforms like Instagram and TikTok are key tools for business growth.",
    image: blogImg.src,
    type: "Social Media",
  },
];
