import React from 'react'
import './Navbar.css'

function Navbar() {
  
  const [activeNavUl, setActiveNavUl] = React.useState("navLi")
  console.log("hai")
  const [activeX,setActiveX]=React.useState("fas fa-x x")
  const [activeBars,setActiveBars]=React.useState("fas fa-bars bars")

    const activeToggle = ()=> {
  
      activeNavUl === "navLi" ? setActiveNavUl("navActive") : setActiveNavUl("navLi")
      
      activeBars === "fas fa-bars bars" ? setActiveBars("fas fa-bars active-bars") : setActiveBars("fas fa-bars bars")
    
      activeX === "fas fa-x x" ? setActiveX ("fas fa-x x-active") : setActiveX("fas fa-x x")
  }

  return(
    <nav 
    className='navbar'>
      
        <img className='nav_element nav_logo' src='#' alt='logo'/>
        <ul className={activeNavUl} >
            <li ><a className='nav_element nav_links'  href='#'>hOME</a></li>
            <li ><a className='nav_element' href='#'>|</a></li>
            <li><a className='nav_element nav_links' href='#'>tRENDING</a></li>
            <li ><a className='nav_element' href='#'>|</a></li>
            <li><a className='nav_element nav_links' href='#'>uPCOMING</a></li>
            <li ><a className='nav_element' href='#'>|</a></li>
            <li><a className='nav_element nav_links' href='#'>aBOUT</a></li>
          
        </ul>
        <div 
        className='hamburger'
        onClick={activeToggle}>
          <i class={activeBars} ></i>
          <i class={activeX} ></i>
        </div>
       
    </nav>
  )
}

export default Navbar