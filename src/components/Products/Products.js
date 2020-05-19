import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Product from "./Product/Product";

const useStyles = makeStyles({
  root: {},
});

const Products = ({ products }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {products.edges.map(({ node: product }) => (
        <Grid md={4} item key={product.id}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
