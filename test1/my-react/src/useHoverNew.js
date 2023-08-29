import { useEffect, useState, useRef } from "react";

export default function useHoverNew() {
  const [hovered, setHovered] = useState(false);
  const hoverRef = useRef();

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  useEffect(() => {
    if (hoverRef) {
      hoverRef.current.addEventListener("mouseover", handleMouseOver);
      hoverRef.current.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      hoverRef.current.removeEventListener("mouseover", handleMouseOver);
      hoverRef.current.removeEventListener("mouseout", handleMouseOut);
    };
  }, [hoverRef]);

  return [hovered, hoverRef];
}
