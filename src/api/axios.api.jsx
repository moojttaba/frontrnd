import axios from "axios";
export const getAllProducts = axios
  .get("/api/v1/products")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    
  });





  
