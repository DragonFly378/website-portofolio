import React from "react";
import { Helmet } from "react-helmet-async";

const BASE_URL = "https://hafizhisbullah.com";
const DEFAULT_TITLE =
  "Muhammad Hafiz Hisbullah - Product Designer & Frontend Developer";
const DEFAULT_DESC =
  "Product Designer & Frontend Developer passionate about creating beautiful and user-friendly digital experiences. Explore my UX/UI design projects and web development portfolio.";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

const SEO = React.memo(
  ({ title = DEFAULT_TITLE, description = DEFAULT_DESC, path = "/", image = DEFAULT_IMAGE }) => {
    const url = `${BASE_URL}${path}`;

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    );
  }
);

SEO.displayName = "SEO";

export default SEO;
