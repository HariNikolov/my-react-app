import React from "react";
import { Link } from "react-router-dom";

const Links = ({ route, title, cName, color }) => {
  return (
    <Link to={route} className={cName} color={color}>
      {title}
    </Link>
  );
};

export default Links;
