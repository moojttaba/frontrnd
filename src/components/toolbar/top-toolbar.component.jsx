import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import Hidden from "@material-ui/core/Hidden";

////Route
import { Link, withRouter } from "react-router-dom";

/////Redux
import { connect } from "react-redux";
import { signOutStart } from "../../redux/user/user.actions";

import logo from "../../assets/logo.svg";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    backgroundColor: theme.palette.secondary.light,
  },
  logo: {
    height: "3em",
  },
  Box: {
    flexGrow: 1,
  },
  icon: {
    marginLeft: theme.spacing(2),
  },
}));

const TopToolbar = ({ signOutStart, history }) => {
  const classes = useStyles();

  const handleSignOut = () => {
    signOutStart();
    history.push("/");
  };

  return (
    <React.Fragment>
      <Hidden mdDown>
        <Toolbar className={classes.toolbar}>
          <Button
            component={Link}
            to="/"
            //onClick={() => props.setValue(0)}
          >
            <img src={logo} alt="لگو بیاره" className={classes.logo} />
          </Button>

          <Box className={classes.Box} />

          <Button
            onClick={handleSignOut}
            color="primary"
            className={classes.button}
            startIcon={
              <RoomOutlinedIcon className={classes.icon} fontSize="large" />
            }
          >
            آدرس
          </Button>
          <Button
            component={Link}
            color="primary"
            className={classes.button}
            to="/Profile"
            startIcon={<AccountCircleOutlinedIcon className={classes.icon} />}
          >
            اکانت
          </Button>
        </Toolbar>
      </Hidden>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default withRouter(connect(null, mapDispatchToProps)(TopToolbar));
