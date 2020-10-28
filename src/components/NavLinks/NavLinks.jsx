import React from "react";
import Link from "../Link/Link";
import * as ROUTES from "../../constants/routes";
import "./nav-links.css";

export default function Links() {
  return (
    <div className="root">
      <Link route={ROUTES.HOME} title="Home" cName="navLink" />
      <Link route={ROUTES.CATALOG} title="Catalog" cName="navLink" />
      <Link route={ROUTES.BLOG} title="Blog" cName="navLink" />
      <Link route={ROUTES.CONTACT} title="Contact" cName="navLink" />
    </div>
  );
}
