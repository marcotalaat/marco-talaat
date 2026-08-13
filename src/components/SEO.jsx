import { Helmet } from "react-helmet-async";

const SITE_URL = "https://marco-talaat.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
}) => {
  // Normalize the path so we never generate //
  const normalizedPath = path ? `/${path.replace(/^\/+|\/+$/g, "")}` : "/";

  const url =
    normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;

  // Make sure the image is an absolute URL
  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}/${image.replace(/^\/+/, "")}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />

      <meta property="og:site_name" content="Marco Talaat" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={url} />

      <meta property="og:image" content={imageUrl} />

      <meta property="og:image:alt" content={title} />

      <meta property="og:locale" content="en_US" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={imageUrl} />

      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
};

export default SEO;
