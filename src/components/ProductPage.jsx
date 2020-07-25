import React from "react";
import CardForm from "./ProductCards";
import { compose } from "recompose";
import { withFirebase } from "./Firebase";
import { withRouter } from "react-router";
import "./products-page.css";
import queryString from "query-string";

const ProductsPage = () => (
  <div>
    <Cards />
  </div>
);

export class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  onProductsRecieved = (res) => {
    this.setState({ products: res });
  };

  componentDidMount() {
    const params = queryString.parse(this.props.location.search);

    this.props.firebase.getProducts(params, this.onProductsRecieved);
  }

  render() {
    return (
      <div className="products-container">
        {this.state.products.map((product) => (
          <CardForm
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    );
  }
}

const Cards = compose(withRouter, withFirebase)(ProductPage);

export default ProductsPage;
