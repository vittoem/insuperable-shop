import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Products from "../components/Products/Products";
import ClothesList from "../components/ClothesList/ClothesList";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "16px",
  },
});

const Home = ({ data }) => {
  console.log(data);

  const classes = useStyles();

  return (
    <Layout site={data.site}>
      <Grid container className={classes.root}>
        <Grid item md={2}>
          <ClothesList />
        </Grid>
        <Grid item md={10}>
          <Products products={data.products} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query CatalogueQuery {
    products: allDatoCmsProduct {
      edges {
        node {
          id
          name
          price
          image {
            url
            sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;
