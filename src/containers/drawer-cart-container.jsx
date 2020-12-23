import React from "react";
/////REDUX
import { connect } from "react-redux";
import { toggleCartHidden } from "../redux/cart/cart.actions";

////Route
import { withRouter } from "react-router-dom";

/////Selector
import { createStructuredSelector } from "reselect";

import {
  selectCartHidden,
  selectCartItems,
  selectCartTotal,
} from "../redux/cart/cart.selectors";

////Icons

import CloseIcon from "@material-ui/icons/Close";
import azimmarket from "../assets/azimmarket.svg";
/////Styles
import { makeStyles } from "@material-ui/core/styles";

///// Component
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CartItem from "../components/cart-item.component";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 540;
const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.secondary.light,
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerBox: {},
  drawerBoxHeader: {
    ...theme.typography.tab,
    borderBottom: `5px solid ${theme.palette.primary.main}`,
  },
  drawerBoxCartItem: {},
  drawerBoxFooter: {},
  button: {
    margin: theme.spacing(1),
    padding: "10px 18px",
    textAlign: "center",
    position: "relative",
  },
  azimmarket: {
    borderBottom: `1px solid ${theme.palette.secondary.dark}`,
  },
}));

const DrawerCart = ({
  hidden,
  toggleCartHidden,
  cartItems,
  total,
  history,
}) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleCheckout = () => {
    history.push("/checkout");
    toggleCartHidden();
  };

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={hidden}
        onClose={toggleCartHidden}
        onOpen={toggleCartHidden}
        classes={{ paper: classes.drawer }}
      >
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          className={classes.drawerBox}
        >
          <Box bgcolor="background.paper" className={classes.drawerBoxHeader}>
            <Box
              p={2}
              display="flex"
              flexDirection="row-reverse"
              alignItems="center"
            >
              <Box>
                <IconButton onClick={toggleCartHidden}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box flexGrow={1} mr={3}>
                <Typography>سبد خرید</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              p={2}
              display="flex"
              flexDirection="row"
              flexGrow={1}
              alignItems="center"
              bgcolor="background.paper"
              className={classes.azimmarket}
              mt={1}
            >
              <Box pr={3}>
                <Avatar
                  alt="Remy Sharp"
                  src={azimmarket}
                  className={classes.avatar}
                />
              </Box>
              <Box flexGrow={1} mr={3}>
                <Typography variant="subtitle2">عظیم مارکت</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2">{`جمع کل  ${total}  تومان`}</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            bgcolor="background.paper"
            flexGrow={1}
            className={classes.drawerBoxCartItem}
          >
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </Box>
          <Box
            p={3}
            mt={1}
            className={classes.drawerBoxFooter}
            bgcolor="background.paper"
          >
            <Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                size="large"
                onClick={handleCheckout}
              >
                تکمیل خرید
              </Button>
            </Box>
          </Box>
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItems: selectCartItems,
  total: selectCartTotal,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DrawerCart)
);
