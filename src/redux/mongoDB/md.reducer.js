import MdActionTypes from "./md.types";
const INITIAL_STATE = {
  MDcollections: {
    data: {
      products: null,
    },
  },
  isFetching: false,
  errorMessage: undefined,
};

const mdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MdActionTypes.FETCH_MDCOLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case MdActionTypes.FETCH_MDCOLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        MDcollections: action.payload,
      };
    case MdActionTypes.FETCH_MDCOLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default mdReducer;
