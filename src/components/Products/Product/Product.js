import React from "react";
import Img from "gatsby-image";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
  CardActions,
  CardContent,
} from "@material-ui/core";

const Product = ({ product }) => {
  return (
    <Card
      // className={classes.root}
      data-item-id={product.id}
      data-item-price={product.price}
      data-item-image={product.image.url}
      data-item-name={product.name}
      data-item-url={`/`}
    >
      <CardActionArea>
        <CardMedia
          // className={classes.media}
          //  image="/static/images/cards/contemplative-reptile.jpg"
          title="Prodotto"
        >
          <Img sizes={product.image.sizes} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Scheda Prodotto
        </Button>
        <Button size="small" color="primary">
          Aggiungi al carrello
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
