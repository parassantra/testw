import { useRef } from "react"
import useHover from "./useHover"
import useHoverNew from "./useHoverNew"

export default function Child10() {
  const [hoveredNew, hoverRef] = useHoverNew()
  return (
    <>
    <div
      ref={hoverRef}
      style={{
        backgroundColor: hoveredNew ? "blue" : "red",
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
      }}
    />
    <div>{hoveredNew ? "Hovering" : "Not Hovering"}</div>
    </>
  )
    }