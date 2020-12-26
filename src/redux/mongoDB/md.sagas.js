import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";
// import { getAllProducts } from "./../../api/axios.api.jsx";

import {
  fetchMdCollectionsSuccess,
  fetchMdCollectionsFailure,
} from "./md.actions";

import MdActionTypes from "./md.types";

export function* fetchCollectionsAsync() {
  try {
    //const collectionRef = firestore.collection("collections");
    //const snapshot = yield collectionRef.get();
    const collectionsMap = axios
      .get("/api/v1/products")
      .then((response) => response.data);
    yield put(fetchMdCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchMdCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    MdActionTypes.FETCH_MDCOLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* mdSagas() {
  yield all([call(fetchCollectionsStart)]);
}
