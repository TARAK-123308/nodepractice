import React from "react";

function NavComponent1() {
  return (
    <>
      <header>
        <div className="bg-slate-400 h-[12vh] flex justify-between items-center mx-3-auto p-3">
          <h3>
            Brand<span>Name</span>
          </h3>
          <nav className="flex gap-4">
            <a href="/" className="">Home</a>
            <a href="/about"className="">About</a>
            <a href="/products" className="">Products</a>
            <a href="/contact" className="">Contact</a>
            <a href="/receipes" className="">Contact</a>
            <a href="/login" className="">Login</a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavComponent1;
