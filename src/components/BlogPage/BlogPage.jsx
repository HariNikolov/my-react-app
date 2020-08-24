import React from "react";
import "./blog-page.css";
import ContentWrapper from "./ContentWrapper";
import TextWrapper from "./TextWrapper";
import ImageWrapper from "./ImageWrapper";

const Blog = () => {
  return (
    <div className="component">
      <div id="blogLayout">
        <div className="block" id="block1">
          <ImageWrapper />
          <TextWrapper />
        </div>
        <ContentWrapper />
      </div>
    </div>
  );
};

export default Blog;
