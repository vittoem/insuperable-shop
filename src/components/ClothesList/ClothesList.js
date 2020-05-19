import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  root: {
    display: "inline-block",
  },
});

const ClothesList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {["T-shirt", "Pantaloni", "Jeans", "Tute"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ClothesList;
