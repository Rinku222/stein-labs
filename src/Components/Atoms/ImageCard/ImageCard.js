import React from "react";
import { Typography } from "@mui/material";
import "./ImageCard.css";

const ImageCard = (props) => {
  const { ele } = props;

  return (
    <div className="imageContainer">
      <img src={ele.thumbnailUrl} alt="logo" className="image" />
      <Typography className="image-text">{ele.title}</Typography>
    </div>
  );
};

export default ImageCard;
