import React from "react";

//redux

import { connect } from "react-redux";
import { addItem, removeItem } from "../redux/cart/cart.actions";

//components

import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
    backgroundColor: "#fff",
    boxShadow: "none",
    padding: "0 10px",
  },
  Avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  CartItem: {
    justifyContent: "space-between",
  },
}));

const CartItem = ({ cartItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      className={classes.CartItem}
    >
      <Box mr={3} width="25%">
        <Avatar alt="Remy Sharp" src={imageUrl} className={classes.Avatar} />
      </Box>
      <Box
        p={2}
        mr={4}
        display="flex"
        flexDirection="column"
        flexShrink={0}
        width="25%"
      >
        <Box>
          <Typography gutterBottom variant="subtitle2">
            {name}
          </Typography>
        </Box>
        <Box>
          <Typography gutterBottom variant="subtitle1" color="textSecondary">
            {`${price} تومان`}
          </Typography>
        </Box>
      </Box>
      <Box
        mr={0}
        display="flex"
        flexDirection="row"
        alignItems="center"
        width="25%"
      >
        <Box>
          <IconButton onClick={() => addItem(cartItem)}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box p={2}> {quantity}</Box>
        <Box>
          <IconButton onClick={() => removeItem(cartItem)}>
            <RemoveIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        p={2}
        mr={3}
        display="flex"
        flexShrink={0}
        alignContent="flex-start"
        width="25%"
      >
        <Typography gutterBottom variant="subtitle2">
          {` ${quantity * price} تومان`}
        </Typography>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
