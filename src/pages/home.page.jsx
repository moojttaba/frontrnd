import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Directory from "../containers/directory.container";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Directory />
      <div className={classes.root} />
    </React.Fragment>
  );
};

export default HomePage;
