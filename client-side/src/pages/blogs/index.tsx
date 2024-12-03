import BlogCard from "@/components/common/blog-card/BlogCard";
import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";
import img1 from "../../../public/Carousel/1.png";

const Blogs = () => {
  return (
    <div>
      <CoreBanner
        title="Our Recourses"
        subtitle="Read all our latest blogs and articles at one place"
        crumbOne="Home"
        crumbTwo="Blog"
      />

      <div>
        <BlogCard
          image={img1}
          title="Tolstoy provides an authentic interaction"
          description="Tolstoy provides an authentic interaction without
actually conversing. It allows us to meet shoppers
where they are, show them what they'd like to see, and
engage them more with our brand Tolstoy isn't just a
nice to have. It's a must-have."
          type="Blog"
        />
      </div>
    </div>
  );
};

export default Blogs;
