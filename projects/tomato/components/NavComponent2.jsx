import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { themeContext } from "../App";

function NavComponent2() {
  const { isLoggedIn } = useContext(themeContext);
  return (
    <>
      <header className="bg-sky-400">
        <div className="max-w-5xl mx-auto h-[12vh] flex justify-between items-center mx-3-auto p-3">
          <h3>
            <Link to="/">
              Brand<span>Name</span>
            </Link>
          </h3>
          <nav className="flex gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/addreciepe">Add Reciepe</NavLink>
            <NavLink to="/reciepes">Reciepes</NavLink>

            <Link to="/login">Login</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavComponent2;
