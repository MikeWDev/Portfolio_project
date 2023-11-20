import { useEffect, useState } from "react";
export function useVisible() {
  const [visible, setVisible] = useState("");

  function handleClickClose() {
    setVisible("fs-hidden");
  }
  function handleClickOpen() {
    setVisible("fs-visible");
  }

  return {
    visible,
    handleClickClose,
  };
}
