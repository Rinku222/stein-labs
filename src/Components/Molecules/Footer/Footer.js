import React from "react";
import "./Footer.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import RepeatIcon from "@mui/icons-material/Repeat";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="grey-box" />
      <div className="text-footer">Nothing Playing</div>
      <SkipPreviousIcon />
      <PlayCircleIcon
        style={{ color: "blue" }}
        sx={{ width: 30, height: 30 }}
      />
      <SkipNextIcon />
      <div className="grey-line" />
      <FavoriteIcon
        style={{ color: "grey", margin: "0px 4px" }}
        sx={{ width: 16 }}
      />
      <RepeatIcon
        style={{ color: "grey", margin: "0px 4px" }}
        sx={{ width: 16 }}
      />
      <VolumeMuteIcon
        style={{ color: "grey", margin: "0px 4px" }}
        sx={{ width: 16 }}
      />
    </div>
  );
};

export default Footer;
