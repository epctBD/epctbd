import CoreTitles from "@/components/common/core-titles/CoreTitles";
import styles from "./HomeBlogs.module.scss";
import BlogCard from "@/components/common/blog-card/BlogCard";
import { blogData } from "./HomeBlogData";
import Slider from "react-slick";

// Slick settings for carousel
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const HomeBlogs = () => {
  return (
    <div className={styles.HomeBlogWrapper}>
      <CoreTitles
        subTitle="Read our Blogs"
        title="Blogs"
        intro="Blogs Blogs Blogs Blogs"
      />
      <div className={styles.blogsContainer}>
        <Slider {...settings}>
          {blogData.map((blog) => (
            <div key={blog.id}>
              <BlogCard
                id={blog.id}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                type={blog.type}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeBlogs;
