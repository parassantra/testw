import MenuItem from "./MenuItem"

const Menu = ({menu}) => {
  return (
    <div className='section-center'>
        {
            menu.map(item => (<MenuItem {...item} key={item.id}/>))
        }
    </div>
  )
}

export default Menu