import React from "react";
import Layout from "@/components/Layout";
import HeroExtension from "@/components/Layout/heroextension";


const programHead = {
  headTitle: "Daro Programs | Empowering Communities Through Action",
  description:
    "Explore Daro's diverse programs aimed at fostering sustainable development, enhancing education, improving healthcare, and promoting environmental conservation. Discover how our initiatives are making a tangible difference in communities.",
  keywords:
    "Daro programs, community development, sustainable initiatives, education programs, healthcare projects, environmental conservation, NGO activities, social impact, non-profit programs",
};


const Progran = () => {
  return (
    <Layout title={"Program"} head={programHead}>
      <HeroExtension title={"Program"} />
    </Layout>
  );
};

export default Progran;
