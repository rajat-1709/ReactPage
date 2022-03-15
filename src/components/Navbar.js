import React from "react";


export default function Navbar()
{
    return(
        <nav>
         <img src="./images/reactjs-icon.png" alt="image" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Projects</h4>
        </nav>
    )
}