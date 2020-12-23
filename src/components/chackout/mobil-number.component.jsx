import React from "react";
import Grid from "@material-ui/core/Grid";
import { CustomizedTextField } from "../custom-textField.component";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
}));

const AddressForm = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} >
          <Typography variant="subtitle1"> شماره موبایل تنها برای تحویل سفارش شما نیاز است.</Typography>
    
        </Grid>
        <Grid item xs={12} sm={6}>
         
          <CustomizedTextField
            required
            id="mobileNum"
            name="mobileNum"
            label="شماره موبایل"
            fullWidth
            variant="outlined"
            autoComplete="family-name"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
