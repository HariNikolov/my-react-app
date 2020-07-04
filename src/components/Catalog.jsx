import React from "react";
import "./catalog.css";

export default function Catalog() {
  return (
    <div>
      <a href="/catalog/mens" className="cathref">
        <img
          src="https://www.shaahidamir.co.in/images/mens-banner.jpg"
          alt=""
        />
      </a>
      <a href="/catalog/women" className="cathref">
        <img
          src="https://res.cloudinary.com/dstldjeans/image/fetch/f_jpg/https%3A%2F%2Fd4zpg1jklewne.cloudfront.net%2Fsteak%2Fcollections%2Fwomens%2Fwomens-page-terry-focus-1552438644755%2Foriginal.jpg%3F1552438645"
          alt=""
        />
      </a>
      <a href="/catalog/kids" className="cathref">
        <img
          src="https://www.tatacliq.com/que/wp-content/uploads/2019/08/kidswear-101.jpg"
          alt=""
        />
      </a>
    </div>
  );
}
