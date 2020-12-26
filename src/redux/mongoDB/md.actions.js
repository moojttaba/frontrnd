import MdActionTypes from "./md.types";

export const fetchMdCollectionsStart = () => ({
  type: MdActionTypes.FETCH_MDCOLLECTIONS_START,
});

export const fetchMdCollectionsSuccess = (collectionsMap) => ({
  type: MdActionTypes.FETCH_MDCOLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchMdCollectionsFailure = (errorMessage) => ({
  type: MdActionTypes.FETCH_MDCOLLECTIONS_FAILURE,
  payload: errorMessage,
});
