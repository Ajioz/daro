import Layout from "@/components/Layout";
import HeroExtension from "@/components/Layout/heroextension";
import React from "react";

const contactHead = {
    headTitle: "Contact Daro | Get in Touch with Us",
    description:
        "Reach out to Daro for any inquiries, support, or partnership opportunities. We are here to assist you and provide information about our initiatives in sustainable development, education, healthcare, and environmental conservation.",
    keywords:
        "Daro, contact, inquiries, support, partnership, sustainable development, community empowerment, education, healthcare, environmental conservation, non-profit organization",
};

const Contact = () => {
  return (
    <Layout title={"Contact"} head={contactHead}>
      <HeroExtension title={"Contact Us"} />
    </Layout>
  );
};

export default Contact;
