import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

import * as styled from "./SideMenuStyles";
import MenuList from "../Menulist/MenuList";

const SideMenu = ({shrinkMenuSize,setShrinkMenuSize}) => {
  const screenSize = useSelector((state) => state.screenSize.value);
  return (
    <styled.container shrinkMenuSize={shrinkMenuSize}>
      <MenuList shrinkMenuSize={shrinkMenuSize}/>
      {screenSize > 920 && (
        <styled.arrowContainer
          onClick={() => setShrinkMenuSize((value) => !value)}
        >
          {!shrinkMenuSize ? (
            <IoIosArrowBack size={19} />
          ) : (
            <IoIosArrowForward size={19} />
          )}
        </styled.arrowContainer>
      )}
    </styled.container>
  );
};

export default SideMenu;
