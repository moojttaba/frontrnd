import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "./collection-preview.component";


import { selectCollectionsForPreview } from "../redux/shop/shop.selectors";

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
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
