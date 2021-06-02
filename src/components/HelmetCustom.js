import { Helmet } from "react-helmet";

const HelmetCustom = ({
  title = "FuzzTube",
  description = " A clone of YouTube using YouTube Data API using ReactJS and Firebase for authentication",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default HelmetCustom;

/* 
og ->
Open Graph meta tags are snippets of code that control how URLs are displayed when shared on social media.
*/
