import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, option }) {
  return (
    <div className="sidebaroption">
      <Icon className="sudebaroption__icon" />
      <h4>{option}</h4>
    </div>
  );
}

export default SidebarOption;
