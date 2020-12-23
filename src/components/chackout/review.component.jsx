import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  listItemHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textAlign: "center",
  },
  listItem: {
    padding: theme.spacing(1, 0),
    textAlign: "right",
  },
  total: {
    fontWeight: 700,
  },
  payment:{
    backgroundColor: "#1565c0",
    "&:hover": {
      backgroundColor: "#0d47a1",
    },
  }
}));

const Review = ({ cartItems, total }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        className={classes.paper}
        justify="center"
        direction="column"
      >
        <List disablePadding>
          <ListItem className={classes.listItemHeader}>
            <ListItemText primary="خلاصه سفارش" />
          </ListItem>
          {cartItems.map((cartItem) => (
            <ListItem className={classes.listItem} key={cartItem.name}>
              <ListItemText
                primary={cartItem.name}
                //secondary={product.desc}
              />
              <Typography variant="body2">{`${cartItem.price} تومان`}</Typography>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="جمع کالا" />
            <Typography variant="subtitle1" className={classes.total}>
              {`${total} تومان`}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary="هزینه ارسال" />
            <Typography variant="subtitle1" className={classes.total}>
              {`6 تومان`}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} divider={true}>
            <ListItemText primary="ارزش افزوده" />
            <Typography variant="subtitle1" className={classes.total}>
              {`13 تومان`}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} divider={true}>
            <ListItemText primary="جمع کل" />
            <Typography variant="subtitle1" className={classes.total}>
              {`${total + 19} تومان`}
            </Typography>
          </ListItem>
          <ListItem alignItems="center" className={classes.listItem}>
            <Button color="primary" size="large" fullWidth={true}>
              کد تخفیف اضافه کنید
            </Button>
          </ListItem>
          {/* <ListItem alignItems="center" className={classes.listItem}>
            <Button color="primary" size="large" fullWidth={true} variant='contained' className={classes.payment}>
              پرداخت
            </Button>
          </ListItem> */}
        </List>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Review);
