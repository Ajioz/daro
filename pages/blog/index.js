import Layout from "@/components/Layout";
import HeroExtension from "@/components/Layout/heroextension";
import React from "react";

const blogHead = {
    headTitle: "Daro Blog | Insights on Sustainable Development and Community Empowerment",
    description:
        "Explore the Daro Blog for in-depth articles and insights on sustainable development, community empowerment, education, healthcare, and environmental conservation. Stay informed and inspired to make a positive impact.",
    keywords:
        "Daro Blog, sustainable development, community empowerment, education, healthcare, environmental conservation, social impact, non-profit organization, articles, insights",
};

const Blog = () => {
  return (
    <Layout title={"Blog"} head={blogHead}>
      <HeroExtension title={"Blog Posts"} />
    </Layout>
  );
};

export default Blog;
