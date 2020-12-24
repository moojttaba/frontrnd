import mdActionTypes from './md.types';
import axios from 'axios';



export const fetchmd = () => {
  const response = axios.get('http://localhost:4000/api/v1/products');

  return {
    type: mdActionTypes.FETCH_MD,
    payload: response

  }
}


