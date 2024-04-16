import React from "react";
import "../index.css";
// import Logo from "./images/navbtn.png";
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.png";
import banner3 from "./images/banner3.png";
import banner4 from "./images/banner4.png";
import banner5 from "./images/banner5.png";
import menu from "./images/menus.png";
import logo from "./images/logo.png";
import { NavLink } from "react-router-dom";

function Header() {

  return (
  <>
   
    <ul className="navbar-nav mb-2 mb-sm-0 ms-auto header" id="mySidenav">
      
    <li className="nav-item mx-4"  id="a">
      <NavLink className="nav-link active py-0" id="about"  to="/signin"><img src={banner5} className="rounded-5" alt="fwf" /><span className="text">Signup</span></NavLink>
    </li>
    <li className="nav-item mx-4" id="b">
      <NavLink className="nav-link py-0" id="blog" to="/courses"><img src={banner4} className="rounded-5" alt="fwf"/><span className="text">Courses</span></NavLink>
    </li>
    <li className="nav-item mx-4" id="c">
      <NavLink className="nav-link py-0" id="projects" to="/contect"><img src={banner3}  className="rounded-5" alt="fwf"/><span className="text">Contect</span></NavLink>
    </li>
    <li className="nav-item mx-4" id="d">
      <NavLink className="nav-link py-0" id="contact" to="/about"><img src={banner2}  className="rounded-5" alt="fwf"/><span className="text">About</span></NavLink>
    </li>
    <li className="nav-item mx-4" id="e">
      <NavLink className="nav-link py-0" id="login" to="/"><img src={banner1}  className="rounded-5" alt="fwf"/><span className="text">Home</span></NavLink>
    </li>
  </ul>
  <div className="navbar-brand info1"><img src={logo} alt="fwf"/></div>





  <nav className="navbar navbar-expand-sm  fixed-top" id="mysmallnav">

<div className="container-fluid text-center">
<div className="navbar-brand info1"><img src={logo} alt="fwf"/></div>


<button className="btn  ms-auto my-2 bg" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={menu} alt="" className=""/></button>

<div className="offcanvas offcanvas-end info1" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div className="offcanvas-header ">
  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div className="offcanvas-body mx-auto">
  <ul className="navbar-nav me-auto mb-2 mb-sm-0 info1">
  <li className="nav-item my-4" >
  <NavLink className="nav-link "  to="/"><span className="">Home</span></NavLink>
     </li>
    <li className="nav-item my-4">
      <NavLink className="nav-link" to="/courses"><span className="">Courses</span></NavLink>
    </li>
    <li className="nav-item my-4" >
      <NavLink className="nav-link "  to="/contect"><span className="">Contect</span></NavLink>
    </li>
    <li className="nav-item my-4">
      <NavLink className="nav-link "  to="/about"><span className="">About Us</span></NavLink>
    </li>
    <li className="nav-item my-4" >
    <NavLink className="nav-link active "   to="/signin"><span className="">Signup</span></NavLink>
    </li>
  </ul> 

</div>   
</div>

</div>
</nav> 

  </> 
  );
}


export default Header;