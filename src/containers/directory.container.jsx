import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../redux/directory/directory.selectors";
import MenuItem from "../components/menu-item.component";
import teal from "@material-ui/core/colors/teal";

const color = teal[100];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: color,
    marginTop: theme.spacing(7),
    padding: theme.spacing(3),
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
}));

const Directory = ({ sections }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </GridList>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
