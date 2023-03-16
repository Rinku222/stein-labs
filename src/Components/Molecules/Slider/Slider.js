import React from "react";
import ImageCard from "../../Atoms/ImageCard/ImageCard";
import "./Slider.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Slider = (props) => {
  const { headerText, data } = props;

  console.log(" ==========> data in slider", data);

  return (
    <div className="slider-container">
      <div className="headingContainer">
        <div className="heading">{headerText}</div>
        <div className="line"> </div>
        <ChevronLeftIcon />
        <ChevronRightIcon />
      </div>

      <div className="image-container">
        {data.map((item, i) => {
          return (
            <div key={i}>
              <ImageCard data={data} ele={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
