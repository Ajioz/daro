import Layout from "@/components/Layout";
import HeroExtension from "@/components/Layout/heroextension";
import React from "react";

const blogHead = {
  headTitle: "Daro | Empowering Communities Through Sustainable Development",
  description:
    "Learn about Daro, a dedicated NGO committed to empowering communities through sustainable development, education, healthcare, and environmental conservation. Join us in making a positive impact.",
  keywords:
    "Daro, NGO, sustainable development, community empowerment, education, healthcare, environmental conservation, social impact, non-profit organization",
};

const Blog = () => {
  return (
    <Layout title={"Blog"} head={blogHead}>
      <HeroExtension title={"Blog Posts"} />
    </Layout>
  );
};

export default Blog;
