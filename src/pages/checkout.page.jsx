/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectSWitchSignUpSignIn } from "../redux/user/user.selectors";
import StepperChackout from "../containers/stepper-checkout.container";
import Review from "../components/chackout/review.component";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(2),
  },

  checkout: {
    backgroundColor: theme.palette.background.default,
    //maxWidth: 600
  },
  summery: {
    backgroundColor: theme.palette.background.default,
    //maxWidth: 300
    paddingRight: 20
  },
}));
const CheackoutPage = ({ signUpTrue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Grid
        container
        className={classes.mainContainer}
        justify="center"
        alignItems="flex-start"
        spacing={0}
        direction={matches ? "column" : "row"}
      >
        <Grid  container item xs={matches ? "auto" : 6} className={classes.checkout}>
          <StepperChackout />
        </Grid>

        <Grid
         container
          item
          xs={matches ? "auto" : 3}
          className={classes.summery}
          justify="center"
        >
          <Review />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  signUpTrue: selectSWitchSignUpSignIn,
});

export default connect(mapStateToProps)(CheackoutPage);
