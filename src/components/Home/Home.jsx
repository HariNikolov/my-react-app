import React, { Fragment } from "react";
import NavigationBar from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withFirebase } from "../Firebase/index.js";
import DialogMsg from "../DialogMsg/DialogMsg";
import Contacts from "../Contacts/Contacts";
import ProductPage from "../ProductPage/ProductPage";
import Catalog from "../Catalog/Catalog";
import Blog from "../BlogPage/BlogPage";
import CheckoutPage from "../Checkout/CheckoutPage";
import ShoppingCart from "../OrderPage/OrderPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import HomeContent from "../../content/homeContent";
import * as ROUTES from "../../constants/routes";
import PasswordForgetPage from "../PasswordForgetPage/PasswordForgetPage";

const AuthRoutes = (
  <Fragment>
    <Route path={ROUTES.CONTACT} component={Contacts} exact />
    <Route path={ROUTES.COLLECTIONS} component={ProductPage} exact />
    <Route path={ROUTES.CATALOG} component={Catalog} exact />
    <Route path={ROUTES.BLOG} component={Blog} exact />
    <Route path={ROUTES.CHECKOUT} component={CheckoutPage} exact />
    <Route path={ROUTES.ORDER} component={ShoppingCart} exact />
  </Fragment>
);

const NonAuthRoutes = (
  <Fragment>
    <Route path={ROUTES.CONTACT} component={DialogMsg} exact />
    <Route path={ROUTES.COLLECTIONS} component={DialogMsg} exact />
    <Route path={ROUTES.CATALOG} component={DialogMsg} exact />
    <Route path={ROUTES.BLOG} component={DialogMsg} exact />
    <Route path={ROUTES.CHECKOUT} component={DialogMsg} exact />
    <Route path={ROUTES.ORDER} component={DialogMsg} exact />
  </Fragment>
);

const Home = ({ authUser }) => {
  return (
    <Router>
      <React.Fragment>
        <NavigationBar />
        <Switch>
          <Route path={ROUTES.REGISTER} component={Register} exact />
          <Route path={ROUTES.LOGIN} component={Login} exact />
          <Route path={ROUTES.HOME} component={HomeContent} exact />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
            exact
          />
          {authUser ? AuthRoutes : NonAuthRoutes}
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default withFirebase(Home);
