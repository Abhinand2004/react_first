import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from 'react'




function Navbar({ setSearch, cartCount }) {

  const [count,setcount]=useState("")
  useEffect(()=>{
    const count=localStorage.length
    setcount(count)
  },[])
  return (
    <>
      <nav className="navbar">
        <div className="logo">Logo</div>
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/Cart" className="nav-link">
            Cart <span className="cart-count">{count}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
