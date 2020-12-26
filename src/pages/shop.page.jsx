import {
  //useEffect,
  lazy,
  Suspense,
  Fragment,
} from "react";
import { connect } from "react-redux";
//import { Route } from "react-router-dom";

import { fetchCollectionsStart } from "../redux/shop/shop.actions";
//import CollectionPage from "./collection.page";
import Spinner from "../components/spinner.component";
// const CollectionsOverview = lazy(() =>
//   import("../components/collection-overview.component")
// );
const CollectionsPreview = lazy(() =>
  import("../components/collection-preview.component")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  // useEffect(() => {
  //   fetchCollectionsStart();
  // }, [fetchCollectionsStart]);
  // fetchCollectionsStart();

  return (
    // <React.Fragment>
    //   <Suspense fallback={<Spinner />}>
    //     <Route exact path={`${match.path}`} component=     {CollectionsOverview} />
    //     <Route
    //       path={`${match.path}/:collectionId`}
    //       component={CollectionPage}
    //     />
    //   </Suspense>
    // </React.Fragment>

    <Fragment>
      <Suspense fallback={<Spinner />}>
        <CollectionsPreview/>
      </Suspense>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
