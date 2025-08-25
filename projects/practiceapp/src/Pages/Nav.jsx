import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
    <div className=" flex gap-12 float-left m-3"><h1>NavBar</h1></div>
    <div  className=" flex gap-12 float-right m-3">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div></>
  );
}

export default Nav;
