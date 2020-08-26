import React, { Fragment } from "react";
import ProductsCategories from "../components/ProductCategories/ProductsCategories";
import ProductsOffers from "../components/ProductOffers/ProductsOffers";
import Cover from "../components/Home/Cover";

const HomeContent = () => {
  return (
    <Fragment>
      <Cover />
      <ProductsCategories />
      <ProductsOffers />
    </Fragment>
  );
};

export default HomeContent;
