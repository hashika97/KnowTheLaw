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
          
<section className="intro-area">
  <div className='container'>
  <div className="row">
	<div className="col-sm-4">
		<div className="intro-block">
			<h3>Car Accident</h3>
    </div>
  </div>

  <div className="col-sm-4">
		<div className="intro-block">
			<h3>Child Welfare</h3>
	  </div>
  </div>

  <div className="col-sm-4">
		<div className="intro-block">
			<h3>Family Laws</h3>
	  </div>
  </div>
</div>
  </div>
</section>
<section className='more'>
         <div>
           <div>
           <li className="header.font"><Link to="/login" >SignIn</Link></li>
           <li className="header.font"><Link to="/register">SignUp</Link></li> 
         </div>
         </div>
</section>
         
         </div>
    )
}