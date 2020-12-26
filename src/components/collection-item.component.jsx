import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import { selectCartItems } from "../redux/cart/cart.selectors";

//import { addItem } from "../redux/cart/cart.actions";
import { makeStyles } from "@material-ui/core/styles";

import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
//import IconButton from "@material-ui/core/IconButton";

//import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

//import CountItem from "./count-item.component";

const useStyles = makeStyles((theme) => ({
  GridListTile: {
    marginLeft: theme.spacing(1),
  },
  Card: {
    padding:theme.spacing(0, 1),
    margin: "10px 10px",
    width: 210,
    height: "97%",
    //boxShadow: "none",
    position: "relative",
    boxShadow: "0 0 4px 0 rgba(0,0,0,.08)",
    transition: "box-shadow .25s ease",
    "&:hover": {
      boxShadow: " 2px 2px 10px 0 rgba(0,0,0,.08), 0 0 4px 0 rgba(0,0,0,.08)",
    },
  },
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
    borderRadius: 4,
    boxShadow: " rgba(0, 0, 0, 0.25) 0px 3px 10px",
    userSelect: "none",
    "& span": {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  media: {
    height: 0,
    paddingTop: "80.25%", // 16:9
  },
  CardHeader: {
    display: "inline",
    "& span": {
      fontSize: 16,
      paddingRight: 4,
    },
  },
  CardActions: {
    justifyContent: "center",
    "& button": {
      border: "1px dashed #e8104a",

      color: "#e8104a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#ffeae1",
        border: "1px dashed #e8104a",
      },
    },
  },
}));

const CollectionItem = ({
  //cartItems,
  item,
  //addItem
}) => {
  const { title, price, imageLink,description } = item;

  const classes = useStyles();
  //const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <GridListTile className={classes.GridListTile}>
      <Card className={classes.Card}>
        {/* {cartItems.map((cartItem) =>
          cartItem.id === item.id ? (
            <CountItem key={cartItem.id} cartItem={cartItem} />
          ) : null
        )} */}
        {/* <IconButton aria-label="settings" onClick={() => addItem(item)}>
          <AddCircleOutlineIcon color="primary" />
        </IconButton> */}
        <CardMedia className={classes.media} image={imageLink} />
        <CardHeader
          className={classes.CardHeader}
          title={title}
          subheader={` ${price} تومان`}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing className={classes.CardActions}>
          <Button variant="outlined" color="primary" fullWidth={true}>
            اضافه کردن کوپن
          </Button>
        </CardActions>
      </Card>
    </GridListTile>
  );
};

const mapStateToProps = createStructuredSelector({
  //cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  //addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
