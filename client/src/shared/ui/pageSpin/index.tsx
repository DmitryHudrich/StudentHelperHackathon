import React from "react";
import { Spin } from "antd";

function PageSpin() {
  return (
    <Spin
      size="large"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

export default React.memo(PageSpin);
