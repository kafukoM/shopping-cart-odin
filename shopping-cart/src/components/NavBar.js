import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({children}) => {
    return (
        <div>
        <Link to="/">GAMER'S ARCADE</Link>
        {children}
      </div>
    )
}

export default NavBar