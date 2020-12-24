import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";
import { mdSagas } from "./mongoDB/md.sagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(mdSagas), call(userSagas), call(cartSagas)]);
}
