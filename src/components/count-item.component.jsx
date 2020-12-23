import React from "react";
import { connect } from "react-redux";

import { addItem, removeItem } from "../redux/cart/cart.actions";

import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import { IconButton, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  ButtonGroup: {
    flexDirection: "row-reverse",
    width: "90%",
    height: "3em",
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: 6,
    left: "5%",
    zIndex: 1,
    backgroundColor: "rgb(255, 255, 255)",
    //backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    boxShadow: " rgba(0, 0, 0, 0.25) 0px 3px 10px",
    userSelect: "none",
    alignItems: "center",
    "& span": {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  NUM: {
    color: theme.palette.primary.main,
  },
}));

const CountItem = ({ cartItem, addItem, removeItem }) => {
  const classes = useStyles();
  const { quantity } = cartItem;

  return (
    <Box className={classes.ButtonGroup}>
      <IconButton onClick={() => removeItem(cartItem)}>
        <RemoveIcon color="primary" />
      </IconButton>
      <Badge className={classes.NUM}>{quantity}</Badge>

      <IconButton onClick={() => addItem(cartItem)}>
        <AddIcon color="primary" />
      </IconButton>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CountItem);
