import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css';



export default function Header() {
  const HeaderStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize:'20px'
}

  return (
    <div className="header">
    <li className="header.font"><Link to="/" style={HeaderStyle}>Home</Link></li>
    <li className="header.font"><Link to="/category" style={HeaderStyle}>Categories</Link></li> 
    
           
    </div>
  )
}
