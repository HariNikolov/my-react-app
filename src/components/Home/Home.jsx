import React, { Fragment } from "react";
import NavigationBar from "../Header/Header";
import ProductsCategories from "../ProductCategories/ProductsCategories";
import Footer from "../Footer/Footer";
import ProductsOffers from "../ProductOffers/ProductsOffers";
import Register from "../Register/Register";
import Contacts from "../Contacts/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import cover from "../../images/AdidasCover.jpg";
import Login from "../Login/Login";
import Catalog from "../Catalog/Catalog";
import * as ROUTES from "../../constant/routes";
import ProductPage from "../ProductPage/ProductPage";
import Blog from "../BlogPage/BlogPage";
import CheckoutPage from "../Checkout/CheckoutPage";
import ShoppingCart from "../OrderPage/OrderPage";
import { withFirebase } from "../Firebase/index.js";
import AlertMsg from "../DialogMsg/DialogMsg";

const Cover = () => {
  return (
    <CardMedia>
      <img
        style={{ display: "block", height: 800, width: "100%" }}
        src={cover}
        alt="increase priority"
      ></img>
    </CardMedia>
  );
};

const Content = () => {
  return (
    <Fragment>
      <Cover />
      <ProductsCategories />
      <ProductsOffers />
    </Fragment>
  );
};

const isLoggedIn = (
  <Fragment>
    <Switch>
      <Route path={ROUTES.REGISTER} component={Register} exact />
      <Route path={ROUTES.LOGIN} component={Login} exact />
      <Route path={ROUTES.HOME} component={Content} exact />
      <Route path={ROUTES.CONTACT} component={Contacts} exact />
      <Route path={ROUTES.COLLECTIONS} component={ProductPage} exact />
      <Route path={ROUTES.CATALOG} component={Catalog} exact />
      <Route path={ROUTES.BLOG} component={Blog} exact />
      <Route path={ROUTES.CHECKOUT} component={CheckoutPage} exact />
      <Route path={ROUTES.ORDER} component={ShoppingCart} exact />
    </Switch>
  </Fragment>
);

const alertMsg = (
  <Fragment>
    <Switch>
      <Route path={ROUTES.REGISTER} component={Register} exact />
      <Route path={ROUTES.LOGIN} component={Login} exact />
      <Route path={ROUTES.HOME} component={Content} exact />
      <Route path={ROUTES.CONTACT} component={AlertMsg} exact />
      <Route path={ROUTES.COLLECTIONS} component={AlertMsg} exact />
      <Route path={ROUTES.CATALOG} component={AlertMsg} exact />
      <Route path={ROUTES.BLOG} component={AlertMsg} exact />
      <Route path={ROUTES.CHECKOUT} component={AlertMsg} exact />
      <Route path={ROUTES.ORDER} component={AlertMsg} exact />
    </Switch>
  </Fragment>
);

const Home = ({ authUser }) => {
  return (
    <Router>
      <React.Fragment>
        <NavigationBar />
        {authUser ? isLoggedIn : alertMsg}
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default withFirebase(Home);
