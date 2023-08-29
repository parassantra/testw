import SingleColor from "./SingleColor"

const ColorList = ({colorList}) => {
  return (
    <section className="colors">
        {
            colorList.map((color,index) => (<SingleColor key={color.hex} color={color} index={index}/>))
        }
    </section>
  )
}

export default ColorList