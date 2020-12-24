import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";

import CollectionItem from "./collection-item.component";
import { selectMdCollections } from "./../redux/mongoDB/md.selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    //smarginTop: theme.spacing(7),
    padding: theme.spacing(3),
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
}));

const CollectionPreview = ({
  //header,
  //items,
  collections,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        {/* {header} */}
        <GridList className={classes.gridList} cols={2.5}>
          {collections
            //.filter((item, idx) => idx < 7)
            .map((item) => (
              <CollectionItem
                className={classes.CollectionItemCss}
                //className={classes.paper}
                key={item._id}
                item={item}
              />
            ))}
        </GridList>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  //collections: selectCollectionsForPreview,
  collections: selectMdCollections,
});

export default connect(mapStateToProps)(CollectionPreview);
