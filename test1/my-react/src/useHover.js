import { useEffect, useState } from "react";

export default function useHover(ref) {
  const [hovered, setHovered] = useState(false);
  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  useEffect(() => {
    if (ref) {
      ref.current.addEventListener("mouseover", handleMouseOver);
      ref.current.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      ref.current.removeEventListener("mouseover", handleMouseOver);
      ref.current.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref]);

  return hovered;
}
