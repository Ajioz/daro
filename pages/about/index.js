import Layout from "@/components/Layout";
import HeroExtension from "@/components/Layout/heroextension";
import React from "react";

const aboutHead = {
  headTitle:
    "About Daro | Empowering Communities Through Sustainable Development",
  description:
    "Learn about Daro, a dedicated NGO committed to empowering communities through sustainable development, education, healthcare, and environmental conservation. Join us in making a positive impact.",
  keywords:
    "Daro, NGO, sustainable development, community empowerment, education, healthcare, environmental conservation, social impact, non-profit organization",
};

const About = () => {
  return (
    <Layout title={"About"} head={aboutHead}>
      <HeroExtension title={"About Us"} />
      
    </Layout>
  );
};

export default About;
