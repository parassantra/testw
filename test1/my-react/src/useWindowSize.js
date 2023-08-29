import React, { useState, useLayoutEffect } from "react";

const useWindowsize = (initialValue) => {
  const [windowSize, setWindowSizw] = useState({
    width: 0,
    height: 0,
  });

  const handleSize = () => {
    setWindowSizw({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return windowSize;
};

export default useWindowsize;
