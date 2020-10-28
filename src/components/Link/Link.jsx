import React from "react";
import { Link } from "react-router-dom";

const Links = ({ route, title, cName, color, doSomething }) => {
  return (
    <Link to={route} className={cName} color={color} onClick={doSomething}>
      {title}
    </Link>
  );
};

export default Links;
