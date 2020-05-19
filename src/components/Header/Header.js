import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { Link } from "gatsby";
import DrawerIcon from "./DrawerIcon/DrawerIcon";

const useStyles = makeStyles({
  title: {
    textDecoration: "none",
    color: "#333333",
  },
  appBar: {
    backgroundColor: "#f7f7f7",
    color: "#333333",
    textAlign: "center",
  },
});

const Header = ({ site }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container>
          <Grid md={4}>
            <DrawerIcon />
          </Grid>
          <Grid md={4}>
            <Typography variant="h4" component="h4">
              <Link
                data-text={site.siteMetadata.siteName}
                to="/"
                className={classes.title}
              >
                {site.siteMetadata.siteName}
              </Link>
            </Typography>
          </Grid>
          <Grid md={4}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
