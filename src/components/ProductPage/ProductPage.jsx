import React from "react";
import CardForm from "../ProductCards/ProductCards";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router";
import "./products-page.css";
import queryString from "query-string";
import Circular from "../Circular/Circular";

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
      loading: false,
    };
  }

  onProductsRecieved = (res) => {
    this.setState({ products: res });
  };

  componentDidMount() {
    this.setState({ loading: true });
    const params = queryString.parse(this.props.location.search);

    const product = this.props.firebase.getProducts(
      params,
      this.onProductsRecieved
    );
    if (product) {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="products-container">
        <div className="circular">
          {this.state.loading ? <Circular /> : null}
        </div>
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
