import mdActionTypes from './md.types';


const INITIAL_STATE = {
  mdData: []
};


const mdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mdActionTypes.FETCH_MD:
      return {
        ...state,
        mdData: action.payload
      };
    default:
      return state;
  }
};

export default mdReducer;
