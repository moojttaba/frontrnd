import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    boxShadow: "none",
  },
  tabContainer: {},
  tabs: {},
}));

const ShopToolbar = (props) => {
  const classes = useStyles();


  const handleChange = (e, value) => {
    props.setValue(value);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (props.value !== 0) {
          props.setValue(0);
        }
        break;
      case "/shop":
        if (props.value !== 1) {
          props.setValue(1);
        }
        break;
      case "/savings":
        if (props.value !== 2) {
          props.setValue(2);
        }
        break;
      default:
        break;
    }
  }, [props, props.value]);

  return (
    <React.Fragment>
      <Toolbar position="static">
        <Tabs
          value={props.value}
          onChange={handleChange}
          className={classes.tabContainer}
          //indicatorColor="primary"
          textColor="primary"
        >
          <Tab component={Link} to="/" label="خانه" className={classes.tabs} />
          <Tab
            component={Link}
            to="/shop"
            label="فروشگاه"
            className={classes.tabs}
          />
          <Tab
            component={Link}
            to="/savings"
            label="با تخفیف"
            className={classes.tabs}
          />
        </Tabs>
      </Toolbar>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShopToolbar);

/*
 emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),



     {
      id: 2,
      header: "نانوایی",
      title: "bakery",
      imageUrl: "images/bakery.jpg",
      linkUrl: "shop/bakery",
      list: {
        first: "باگت",
        second: "سنگک",
        third: "لواش",
        fourth: "بربری",
      },
    },

import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.svg";
import Button from "@material-ui/core/Button";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  tolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    marginTop: "3em",
  },
  logo: {
    height: "5em",
  },
  logoContainer: {
    padding: 0,

    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  AppBar: {
    borderBottom: "1px solid #e5edec",
  },

  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0,
    color: theme.palette.common.white,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (event, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    {
      name: "با تخفیف",
      link: "/savings",
    },
    {
      name: "کم",
      link: "/savings",
    },
    {
      name: "زیاد",
      link: "/savings",
    },
  ];

  React.useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/departments" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/savings" && value !== 2) {
      setValue(2);
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="secondary" className={classes.AppBar}>
          <Toolbar>
            <img src={logo} alt="لگو بیاره" className={classes.logo} />
          </Toolbar>
          <Toolbar disableGutters={false} className={classes.toolbar}>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(2)}
              disableRipple
            ></Button>

            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="فروشگاه"
              />

              <Tab
                className={classes.tab}
                component={Link}
                to="/departments"
                label="دسته بندی ها"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={(event) => handleClick(event)}
                to="/savings"
                label="با تخفیف"
              />
            </Tabs>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option}
                  classes={{ root: classes.menuItem }}
                  component={Link}
                  to={option.link}
                  onClick={(event) => {
                    handleMenuItemClick(event, i);
                    setValue(2);
                    handleClose();
                  }}
                  selected={i === selectedIndex}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.tolbarMargin} />
    </React.Fragment>
  );
};

export default Header;

*/
