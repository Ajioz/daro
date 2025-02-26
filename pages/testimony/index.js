import React from "react";
import Layout from "@/components/Layout";
import HeroExtension from "@/components/Layout/heroextension";

const testimonyHead = {
  headTitle: "Daro | Inspiring Stories of Change and Impact",
  description:
    "Discover inspiring testimonies from individuals and communities positively impacted by Daro's initiatives. Read their stories of transformation and hope, and see how sustainable development can make a real difference.",
  keywords:
    "Daro, testimonies, success stories, community impact, sustainable development, empowerment, transformation, positive change, NGO, non-profit organization",
};

const Testimonies = () => {
  return (
    <Layout title={"Testimonies"} head={testimonyHead}>
      <HeroExtension title={"Testimonies"} />
    </Layout>
  );
};

export default Testimonies;
