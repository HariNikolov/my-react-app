import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import cover from "../../images/AdidasCover.jpg";
import "./home.css";

const Cover = () => {
  return (
    <CardMedia>
      <img className="coverImg" src={cover} alt="increase priority"></img>
    </CardMedia>
  );
};

export default Cover;
