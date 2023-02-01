import React from "react";
import './Navbar.css';

const Nav_bar = ({pokemonFilter}) => {
    return (
        <div className="container">
        <div className="nav">
          <img src="https://sg.portal-pokemon.com/img/common/logo.png" className='logo'></img>
          <button className='Search'>Search</button>
          <input onChange={(e) => pokemonFilter(e.target.value)} className='search' type={"text"} placeholder="Search"/>
        </div>
    
      </div>
    );
}

export default Nav_bar;