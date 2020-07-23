import React from "react";
import "./catalog.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../constant/routes";

export default function Catalog() {
  return (
    <div>
      <Link id="men" to={`${ROUTES.CATALOG}/men`} className="collections">
        <img
          src="https://www.shaahidamir.co.in/images/mens-banner.jpg"
          alt=""
        />
      </Link>
      <Link id="women" to={`${ROUTES.CATALOG}/women`} className="collections">
        <img
          src="https://res.cloudinary.com/dstldjeans/image/fetch/f_jpg/https%3A%2F%2Fd4zpg1jklewne.cloudfront.net%2Fsteak%2Fcollections%2Fwomens%2Fwomens-page-terry-focus-1552438644755%2Foriginal.jpg%3F1552438645"
          alt=""
        />
      </Link>
      <Link id="kids" to={`${ROUTES.CATALOG}/kid`} className="collections">
        <img
          src="https://www.tatacliq.com/que/wp-content/uploads/2019/08/kidswear-101.jpg"
          alt=""
        />
      </Link>
    </div>
  );
}
