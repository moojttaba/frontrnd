import { Fragment } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import axios from "axios";

const handleClick = async (event) => {
  event.preventDefault();

  axios.get('/api/v1/products')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


  //signUpStart({ displayName, email, password });
};

const SavingsPage = () => {
  return (
    <Fragment>
      <Button variant="contained" onClick={handleClick}>
        fetchMd
      </Button>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(SavingsPage);
