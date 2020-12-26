import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "./collection-preview.component";

// import { selectCollectionsForPreview } from "../redux/shop/shop.selectors";
import { selectMdCollections } from "./../redux/mongoDB/md.selectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <React.Fragment>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  //collections: selectCollectionsForPreview,
  collections: selectMdCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
