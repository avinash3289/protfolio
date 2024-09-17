import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg";
import { useRef } from "react";

const Navbar = () => {
    const menuref=useRef();
    const openmenu=()=>{
        menuref.current.style.right="0";
    }
    const closemenu=()=>{
        menuref.current.style.right="-350px";
    }
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="Logo" />
        <img src={menu_open} alt="Menu" onClick={openmenu} className="nav-mob-open"/> 
        <ul className="nav-menu" ref={menuref}>
        <img src={menu_close} alt="Menu" onClick={closemenu} className="nav-mob-close"/>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
      </div>
    </>
  );
};

export default Navbar;
