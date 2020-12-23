import React from "react";
import Grid from "@material-ui/core/Grid";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { CustomizedTextField } from "../custom-textField.component";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
}));

const DeliveryInstructions = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12}>
          <CustomizedTextField
            id="address2"
            name="address2"
            label=""
            fullWidth
            variant="outlined"
            autoComplete="shipping address-line2"
            placeholder="توضیح برای تحویل(در صورت نیاز)"
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <GreenCheckbox color="primary" name="saveAddress" value="yes" />
            }
            label="به لابی من تحویل داده شود."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DeliveryInstructions;
