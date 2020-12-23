import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import logo from "../assets/logo.svg";

import { makeStyles } from "@material-ui/core/styles";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.secondary.light,
  },
  logo: {
    height: "3em",
  },
  Box: {
    flexGrow: 1,
  },
  tolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
    
  },
  AppBar: {
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 1px 2px",
    borderBottom: `5px solid ${theme.palette.primary.main}`,
  },
}));

const SimpleHeader = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="secondary" className={classes.AppBar}>
          <Toolbar className={classes.toolbar}>
            <Button >
              <img src={logo} alt="لگو بیاره" className={classes.logo} />
            </Button>
            <Box className={classes.Box} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.tolbarMargin} />
    </React.Fragment>
  );
};

export default SimpleHeader;
