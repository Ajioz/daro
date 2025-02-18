import Head from "next/head";

const PageHead = ({ headTitle, description, keywords }) => {
  const defaultTitle =
    "Daro Nigeria | Committed to Helping the Unreached and Less Privileged";
  const defaultDescription =
    "Daro Nigeria is an NGO committed to helping the unreached and less privileged in the society through various initiatives and programs.";
  const defaultKeywords =
    "Daro Nigeria, NGO, helping the unreached, less privileged, community support, charity, non-profit organization";

  const logoUrl =
    process.env.NEXT_PUBLIC_LOGO_URL || "https://www.daro.com/images/logo.png";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Daro Nigeria",
    url: "https://www.daro.com",
    logo: logoUrl,
    sameAs: [
      "https://web.facebook.com/daroinitiative",
      "https://x.com/daro_ltd",
      "https://www.linkedin.com/company/daro-limited",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-703-294-2993",
      contactType: "Customer Service",
    },
    founders: [
      { "@type": "Person", name: "Ajiroghene Elo", jobTitle: "CEO" },
      { "@type": "Person", name: "Happiness Ajiroghene", jobTitle: "COO" },
      { "@type": "Person", name: "Ajiroghene Samuel", jobTitle: "CFO" },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Ajiroghene Elo",
        jobTitle: "Team Lead, Community Support",
      },
    ],
    foundingDate: "2020-01-01",
    foundingLocation: "Lagos, Nigeria",
    address: {
      "@type": "PostalAddress",
      streetAddress: "31 Airport Road",
      addressLocality: "Lagos",
      addressRegion: "DTH",
      postalCode: "332213",
      addressCountry: "NG",
    },
    additionalType: "Non-profit organization",
  };

  return (
    <>
      <Head>
        <title>{headTitle || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.daro.com" />

        {/* Open Graph tags */}
        <meta property="og:title" content={headTitle || defaultTitle} />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />
        <meta property="og:url" content="https://www.daro.com" />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={headTitle || defaultTitle} />
        <meta
          name="twitter:description"
          content={description || defaultDescription}
        />
        <meta name="twitter:image" content={logoUrl} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
    </>
  );
};

export default PageHead;
