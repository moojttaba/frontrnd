import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { selectCollection } from "../redux/shop/shop.selectors";
import CollectionItem from "../components/collection-item.component";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(9),
  },
  gridList: {
    width: 1000,
    height: 1000,
    [theme.breakpoints.down("sm")]: {
      width: 500,
    },
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

/////grid eslahs shavad

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div" style={{ color: "black" }}>
            {title}
          </ListSubheader>
        </GridListTile>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </GridList>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
