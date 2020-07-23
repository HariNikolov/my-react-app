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

    this.database = this.props.firebase.data();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(queryString.parse(this.props.location.search));
    return this.database.on("value", (snap) =>
      this.setState({
        products: snap
          .val()
          .filter((pr) => pr.gender === this.props.match.params.type
          ),
      })
    );
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
