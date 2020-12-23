import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  makeStyles,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
} from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
  },
  table: {
    minWidth: 700,
  },
});

/*
const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

*/

const CheckoutItem = ({ cartItems, total, clearItem, addItem, removeItem }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="right">کالاها</TableCell>
            <TableCell align="right">توضیحات</TableCell>
            <TableCell align="right">تعداد</TableCell>
            <TableCell align="right">قیمت</TableCell>
            <TableCell align="right">حذف کردن</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((cartItem) => (
            <TableRow>
              <TableCell align="right">
                <Avatar alt={cartItem.name} src={cartItem.imageUrl} />
              </TableCell>
              <TableCell align="right">{cartItem.name}</TableCell>

              <TableCell align="right">
                <IconButton onClick={() => addItem(cartItem)}>
                  <ArrowForwardIosIcon />
                </IconButton>
                {cartItem.quantity}
                <IconButton onClick={() => removeItem(cartItem)}>
                  <ArrowBackIosIcon />
                </IconButton>
              </TableCell>

              <TableCell align="right">{cartItem.price}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => clearItem(cartItem)}>
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell align="right" colSpan={3}>
              جمع کالاها
            </TableCell>
            <TableCell align="right" colSpan={2}>
              {total}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
