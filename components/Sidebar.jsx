import React from "react";
import SidebarDesktop from "./sidebar/SidebarDesktop";
import SidebarMobile from "./sidebar/SidebarMobile";

function Sidebar() {
  return (
    <>
      <SidebarDesktop />
      <SidebarMobile />
    </>
  );
}

export default Sidebar;
