import React from "react";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "product";
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const BASE_URL = "https://www.mrgcables.com";

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  type = "website",
  image,
  jsonLd,
}) => {
  const url = `${BASE_URL}${path}`;
  const ogImage = image || "/logo.png";

  const jsonLdArray =
    jsonLd && !Array.isArray(jsonLd) ? [jsonLd] : (jsonLd as Record<string, unknown>[] | undefined);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta
        name="google-site-verification"
        content="ADD_CODE_HERE"
      />

      {jsonLdArray &&
        jsonLdArray.map((schema, index) => (
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
            key={index}
            type="application/ld+json"
          />
        ))}
    </Helmet>
  );
};

