import React from "react";
import Layout from "@/components/Layout";
import HeroExtension from "@/components/Layout/heroextension";


const galleryHead = {
  headTitle: "Daro | Gallery",
  description:
    "Explore our gallery showcasing the impactful work of Daro in communities. Witness the transformation and positive changes brought about through our sustainable development initiatives.",
  keywords:
    "Daro, gallery, community impact, sustainable development, transformation, NGO, non-profit organization, social change, community projects",
};


const Gallery = () => {
  return (
    <Layout title={"Gallery"} head={galleryHead}>
      <HeroExtension title={"Gallery"} />
    </Layout>
  );
};

export default Gallery;
