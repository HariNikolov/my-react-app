import { withFirebase } from "./Firebase";
import queryString from "query-string";

function database() {
  this.props.firebase.data();
  const params = queryString.parse(this.props.location.search);
  return this.database.on("value", (snap) => {
    console.log(snap.val());
    return this.setState({
      products: snap
        .val()
        .filter((pr) => pr.gender === params.gender)
        .filter((pr) => !params.category || pr.category === params.category),
    });
  });
}

export default withFirebase(database);
