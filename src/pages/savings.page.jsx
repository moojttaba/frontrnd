import { Fragment } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import { fetchMdCollectionsStart } from "./../redux/mongoDB/md.actions";


const SavingsPage = ({fetchCollectionsStart}) => {
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

export default connect(null, mapDispatchToProps)(SavingsPage);
