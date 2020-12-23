import React from "react";

/////Redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

/////reselect
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";


import Toolbar from "@material-ui/core/Toolbar";
//import fade from "@material-ui/core/fade";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";

import Hidden from "@material-ui/core/Hidden";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import azimmarket from "../../assets/azimmarket.svg";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 1,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    justifyContent: "space-between",
  },
  logo: {
    height: "3em",
  },
  Box: {
    flexGrow: 1,
  },
  icon: {
    fontSize: 30,
    marginLeft: theme.spacing(2),
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
  search: {
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 0px 1px",
    //backgroundColor: fade(theme.palette.common.white, 0.15),
    // "&:hover": {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 0),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    backgroundColor: "rgb(67, 176, 42)",
    color: "rgb(255, 255, 255)",
    left: 0,
    border: "1px solid transparent",
    borderRadius: "5px 0px 0px 5px",
    width: "50px",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    backgroundColor: "rgb(247, 247, 247)",
    borderRadius: "0px 5px 5px 0px",
    border: "1px solid transparent",
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
}));

const MainToolbar = ({ toggleCartHidden, itemCount }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button>
          <Avatar
            alt="Remy Sharp"
            src={azimmarket}
            className={classes.avatar}
          />
          <Typography variant="subtitle2">عظیم مارکت</Typography>
          <ArrowDropDownIcon />
        </Button>
        <Hidden mdDown>
          <div className={classes.search}>
            <Hidden mdDown>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="جستجو..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Hidden>
          </div>
        </Hidden>
        <Button
          color="primary"
          className={classes.button}
          onClick={toggleCartHidden}
          startIcon={
            <StyledBadge
              badgeContent={itemCount}
              color="error"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              overlap="circle"
            >
              <ShoppingCartOutlinedIcon className={classes.icon} />
            </StyledBadge>
          }
        >
          سبد خرید
        </Button>
      </Toolbar>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainToolbar);
