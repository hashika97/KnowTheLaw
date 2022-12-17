import React from 'react'
import {Link} from 'react-router-dom'
import Image from './images/background.jpg'


export default function Categories() {

    return (
        <div className="background">
          <div className="backgroundimage">
          <img src={Image} alt=""/>
          </div>
          <div className="text-on-image">
            <h1>Unbeleivable Solutions<br/> For All Legel Cases </h1><br/>
            <h3>A best experience<br/>easy to read and easy to understand about the basics of laws</h3>
          </div>
          
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="text-on-box">
            <h3><i>Car Accident</i><br/><br/><i>Child Welfare</i><br/><br/><i>Family Law</i></h3>
          </div>

         <div>
           <div>
           <li className="header.font"><Link to="/login" >SignIn</Link></li>
           <li className="header.font"><Link to="/register">SignUp</Link></li> 
         </div>
         </div>
         </div>
    )
}