import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles,makeStyles } from "@material-ui/core/styles";
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
  container:{
    padding: theme.spacing(2),
 
  }
}));

const AddressForm = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} sm={6}>
          <CustomizedTextField
            required
            id="firstName"
            name="firstName"
            label="نام"
            fullWidth
            variant="outlined"
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomizedTextField
            required
            id="lastName"
            name="lastName"
            label="نام خانوادگی"
            fullWidth
            variant="outlined"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomizedTextField
            required
            id="address1"
            name="address1"
            label="آدرس خط اول"
            fullWidth
            variant="outlined"
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomizedTextField
            id="address2"
            name="address2"
            label="آدری خط دوم"
            fullWidth
            variant="outlined"
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomizedTextField
            required
            id="city"
            name="city"
            label="شهر"
            fullWidth
            variant="outlined"
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomizedTextField
            id="state"
            name="state"
            label="استان"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomizedTextField
            required
            id="zip"
            name="zip"
            label="کد پستی"
            fullWidth
            variant="outlined"
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomizedTextField
            required
            id="country"
            name="country"
            label="کشور"
            fullWidth
            variant="outlined"
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <GreenCheckbox color="primary" name="saveAddress" value="yes" />
            }
            label="آدرس ذخیره شود."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
