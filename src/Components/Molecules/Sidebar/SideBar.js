import { Avatar, Typography } from "@mui/material";
import React from "react";

import { SidebarContent } from "../../../utils/constants";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <div>
      <div className="avatar-container">
        <Avatar
          alt="Bob Smith"
          src="/static/images/avatar/1.jpg"
          className="image-tag"
          // sx={{ width: 56, height: 56 }}
        />
        <Typography className="avatar-text">Bob Smith</Typography>
      </div>
      {SidebarContent.map((item, i) => {
        return (
          <div className={i === 0 ? "single-line gradient" : "single-line"}>
            {item.icon}
            <div className="sidebar-label"> {item.label}</div>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
