import React from "react";
import blogContent from "../../content/blogData";

const ContentWrapper = () => {
  const content = blogContent.map((el) => (
    <div className="block" id={`block${el.id}`}>
      <div className={`text-wrapper ${el.side}`}>
        <h4 className="number">{el.number}</h4>
        <h3 className="section">{el.section}</h3>
        <h6 className="text typeWriter">{el.text}</h6>
      </div>
    </div>
  ));
  return content;
};

export default ContentWrapper;
