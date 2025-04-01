import React from 'react'
import logo from '../../Images/react.png';

function Header() {
  return (
    <div className="py-2 pl-2" style={{borderBottom: "1px solid #777"}}>
      <img src={logo} alt="" style={{height: "35px", verticalAlign: "top"}}></img>
      <span className="h2 pt-4 text-white-50">React Course - ReduxOPedia</span>
    </div>
  )
}

export default Header;