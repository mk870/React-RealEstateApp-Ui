import React from "react";
import reactDom from "react-dom";

import { DrawerContainer, DrawerOverlay } from "./DrawerStyles";
import MenuList from "../Menulist/MenuList";
import { useState } from "react";

const Drawer = ({ setOpenMobileMenu }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(true);
  const closeDrawer = () => {
    setDrawerIsOpen((value) => !value);
    setTimeout(() => {
      setOpenMobileMenu((value) => !value);
    }, 600);
  };
  return reactDom.createPortal(
    <>
      <DrawerOverlay onClick={closeDrawer}  />
      <DrawerContainer drawerIsOpen={drawerIsOpen}>
        <MenuList />
      </DrawerContainer>
    </>,
    document.getElementById("drawer")
  );
};

export default Drawer;
