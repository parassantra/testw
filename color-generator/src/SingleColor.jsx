import { toast } from "react-toastify"

const SingleColor = ({color, index}) => {
  const{hex, weight, rgb} = color
  const saveToClipBoard = async() => {
    if(navigator.clipboard){
        try{
            await navigator.clipboard.writeText(`#${hex}`)
            toast.success(`Color copied to clipboard #${hex}`)
        }catch(err){
            toast.error(err.message)
        }
    }
  }
  return (
    <article 
    className={index > 10 ? 'color color-light': 'color'}
    style={{
        background: `#${hex}`
    }}
    onClick={saveToClipBoard}
    >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">#{hex}</p>
        <p className="rgb">({rgb.join(", ")})</p>
    </article>
  )
}

export default SingleColor