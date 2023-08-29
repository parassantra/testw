import React from 'react'
import { useGlobalContext } from './context'
import {FaBars} from "react-icons/fa"
import Navlinks from './Navlinks'

const Navbar = () => {
  const {openSidebar, setPageId} = useGlobalContext()

  const handleSubMenu = (e) => {
    !e.target.classList.contains('nav-link') && setPageId(null)
  }

  return (
    <nav onMouseOver={handleSubMenu}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars/>
        </button>
        <Navlinks/>
      </div>
    </nav>
  )
}

export default Navbar