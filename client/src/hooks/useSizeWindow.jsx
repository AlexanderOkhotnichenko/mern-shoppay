import { useLayoutEffect, useState } from "react";

export function useSizeWindow() {
  const [sizeWindow, setSizeWindow] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSizeWindow = () => {
      setSizeWindow([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateSizeWindow);
    updateSizeWindow();

    return () => window.removeEventListener("resize", updateSizeWindow);
  }, []);

  return sizeWindow;
}
