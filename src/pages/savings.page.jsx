import { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectMdCollections } from "./../redux/mongoDB/md.selectors";

import Button from "@material-ui/core/Button";
import { fetchMdCollectionsStart } from "./../redux/mongoDB/md.actions";

const SavingsPage = ({ fetchCollectionsStart, md}) => {
  console.log(md)
  return (
    <Fragment>
      <Button variant="contained" onClick={fetchCollectionsStart}>
        fetchMd
      </Button>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchMdCollectionsStart()),
});
const mapStateToProps = createStructuredSelector({
  md: selectMdCollections,
});

export default connect(mapStateToProps, mapDispatchToProps)(SavingsPage);
