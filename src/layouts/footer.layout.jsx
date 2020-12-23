import React from "react";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.secondary.light,
  },
  mainContainer: {
    backgroundColor: theme.palette.primary.main,
    position: "absolote",
  },
  link: {
    fontSize: "1rem",
    color: "#fff",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    fontSize: 40,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  socialContainer: {
    position: "absolote",
    marginTop: "-6em",
    right: "1.5em",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hidden mdDown>
        <Grid container className={classes.mainContainer} justify="center">
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/">
                HOme
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/">
                services
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                services2
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                services3
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                services4
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/">
                revlotion
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                revlotion1
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                revlotion2
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/">
                aboit au 1
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                aboit au 2
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                raboit au 3
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/">
                countact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid item>
          <IconButton>
            <InstagramIcon className={classes.icon} />
          </IconButton>
          <IconButton>
            <WhatsAppIcon className={classes.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
