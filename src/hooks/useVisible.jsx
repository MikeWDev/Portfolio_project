import { useState } from "react";
export function useVisible() {
  const [visible, setVisible] = useState("");

  function handleClickClose() {
    setVisible("fs-hidden");
  }
  function handleClickOpen() {
    setVisible("fs-visible");
    console.log(visible);
  }
  return {
    visible,
    handleClickClose,
    handleClickOpen,
  };
}
