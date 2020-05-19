require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: "Insuperable Shop",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-theme-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: `d6540e9089f912180c1c71166f3a8c` },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey:
          "OWE3MmZmMjQtNTk3Yi00OThhLWEwMmUtZDY4ZWM4NzIwYzZiNjM2NjM0Mzc1NzE0MTUwNzI1",
        autopop: true,
      },
    },
  ],
};
