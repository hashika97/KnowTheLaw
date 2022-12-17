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
            <h3>We approach each problem with three essential elements:<br/><u>Strategic thinking</u><br/><u>Creative solusions</u><br/><u>Contacting lawyers</u></h3>
          </div>
          <section id="features">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="box4"></div>

          <div className="text-on-box1">
            <h3><i><b>Car Accident</b></i></h3>
          </div>
          <div className="text-on-box2">
            <h3><i><b>Child Welfare</b></i></h3>
          </div>
          <div className="text-on-box3">
            <h3><i><b>Family Law</b></i></h3>
          </div>
          <div className="text-on-box4">
            <h3><i><b>Family Law</b></i></h3>
          </div>
          </section>
         <div>
           <div>
           <li className="header.font"><Link to="/login" >SignIn</Link></li>
           <li className="header.font"><Link to="/register">SignUp</Link></li> 
         </div>
         </div>
         </div>
    )
}