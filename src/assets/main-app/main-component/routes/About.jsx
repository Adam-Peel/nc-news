import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function AboutPage() {
  return (
    <main>
      <Box
        sx={{
          maxWidth: 1250,
          marginLeft: {
            xs: "5%", // Default margin for extra-small screens
            sm: "17%", // Margin for small screens
            md: "21%", // Margin for medium screens
            lg: "24%", // Margin for large screens
            xl: "24%", // Margin for extra-large screens
          },
          marginRight: {
            xs: "5%", // Default margin for extra-small screens
            sm: "17%", // Margin for small screens
            md: "21%", // Margin for medium screens
            lg: "24%", // Margin for large screens
            xl: "24%", // Margin for extra-large screens
          },
          textAlign: "left",
        }}
      >
        <Typography>
          Northcoders News
          <p>
            This application was built using React with a Vite framework and
            Javascript. It contains all scripts and components necessary to
            serve a front-end REACT app of a mock news aggregator site.
          </p>
          <p>
            In the app, users can view articles with multiple sorting and
            filtering options, vote on articles, and post and delete comments.
            As there are no restrictions on accessing the api requests,
            currently the posting and deleting are restricted to one user (to
            maintain some data integrity).
          </p>
          <p>
            The data is retrieved from a back-end repository and application
            which can be found here:
            https://github.com/Adam-Peel/news-aggregator
          </p>{" "}
        </Typography>
      </Box>
    </main>
  );
}

export default AboutPage;
