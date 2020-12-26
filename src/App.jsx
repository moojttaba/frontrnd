import React, { useEffect, lazy, Suspense, useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
// import { checkUserSession } from "./redux/user/user.actions";
// import { fetchCollectionsStart } from "./redux/shop/shop.actions";

import { fetchMdCollectionsStart } from "./redux/mongoDB/md.actions";

//////////////////////////////////////////// styles
import theme from "./styles/theme.jsx";
import { ThemeProvider } from "@material-ui/core/styles";

//////////////////////////////////////////// Route
import { Route, Switch } from "react-router-dom";

//////////////////////////////////////////// COMPONENTS
import Spinner from "./components/spinner.component";
import Header from "./layouts/header.layout";

//////////////////////////////////////////// PAGES
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-up-and-sign-in.page")
);
const HomePage = lazy(() => import("./pages/home.page"));
const ProfilePage = lazy(() => import("./pages/profile.page"));
const SavingsPage = lazy(() => import("./pages/savings.page"));
const ShopPage = lazy(() => import("./pages/shop.page"));
const CheckoutPage = lazy(() => import("./pages/checkout.page"));

const App = ({ checkUserSession, currentUser, fetchMdCollectionsStart }) => {
  const [value, setValue] = useState(0);
  // useEffect(() => {
  //   checkUserSession();
  //   fetchCollectionsStart();
  // }, [checkUserSession, fetchCollectionsStart]);

  useEffect(() => {
    fetchMdCollectionsStart();
  }, [fetchMdCollectionsStart]);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Header value={value} setValue={setValue} />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/SignInAndSignUpPage" component={SignInAndSignUpPage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/Profile" component={ProfilePage} />
            <Route path="/Savings" component={SavingsPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  // checkUserSession: () => dispatch(checkUserSession()),
  // fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  fetchMdCollectionsStart: () => dispatch(fetchMdCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
