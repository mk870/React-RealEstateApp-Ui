import React from "react";
import reactDom from "react-dom";


import { DrawerContainer, DrawerOverlay } from "./DrawerStyles";
import MenuList from "../Menulist/MenuList";

const Drawer = ({ setOpenMobileMenu }) => {
  return reactDom.createPortal(
    <>
      <DrawerOverlay onClick={() => setOpenMobileMenu((value) => !value)} />
      <DrawerContainer>
        <MenuList />
      </DrawerContainer>
    </>,
    document.getElementById("drawer")
  );
};

export default Drawer;
