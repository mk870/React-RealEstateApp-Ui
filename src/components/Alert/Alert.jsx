import React from "react";
import reactDom from "react-dom";
import { useSelector } from "react-redux";

import * as styled from "./AlertStyles";
import Button from "components/Button/Button";

const Alert = ({
  handleOkFunc,
  handleCancelFunc,
  okButtonText,
  cancelButtontext,
  setOpenAlert,
  alertText,
}) => {
  const screenSize = useSelector((state) => state.screenSize.value);
  return reactDom.createPortal(
    <>
      <styled.overlay onClick={() => setOpenAlert((value) => !value)} />
      <styled.container>
        <styled.text>{alertText}</styled.text>
        <styled.btnContainer>
          <Button
            buttonText={okButtonText}
            type={"click"}
            size={screenSize > 600 ? "medium" : "small"}
            color={"normal"}
            onClickFunc={handleOkFunc}
          />
          <Button
            buttonText={cancelButtontext}
            type={"click"}
            size={screenSize > 600 ? "medium" : "small"}
            color={"danger"}
            onClickFunc={handleCancelFunc}
          />
        </styled.btnContainer>
      </styled.container>
    </>,
    document.getElementById("alert")
  );
};

export default Alert;
