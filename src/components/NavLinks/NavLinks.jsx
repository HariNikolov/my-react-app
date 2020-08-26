import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./nav-links.css"

export default function Links() {
  return (
    <div className="root">
      <Link to={ROUTES.HOME} className="link">
        Home
      </Link>
      <Link to={ROUTES.CATALOG} className="link">
        Catalog
      </Link>
      <Link to={ROUTES.BLOG} className="link">
        Blog
      </Link>
      <Link to={ROUTES.ABOUT} className="link">
        About
      </Link>
      <Link to={ROUTES.CONTACT} className="link">
        Contact
      </Link>
    </div>
  );
}
