import React from "react";
import Layout from "@/components/Layout";
import HeroExtension from "@/components/Layout/heroextension";


const programHead = {
  headTitle: "Daro | Empowering Communities Through Sustainable Development",
  description:
    "Learn about Daro, a dedicated NGO committed to empowering communities through sustainable development, education, healthcare, and environmental conservation. Join us in making a positive impact.",
  keywords:
    "Daro, NGO, sustainable development, community empowerment, education, healthcare, environmental conservation, social impact, non-profit organization",
};


const Progran = () => {
  return (
    <Layout title={"Program"} head={programHead}>
      <HeroExtension title={"Program"} />
    </Layout>
  );
};

export default Progran;
