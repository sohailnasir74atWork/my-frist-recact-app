import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import React from "react"
function Manu(){
    const [showMenu, setMenu] = useState(false)
    let manue;
    let manueMask;
    if(showMenu) 
    {manue = <div className="bg-white fixed top-0 left-0 w-4/5 h-full z-50 bg-shadow">This is Manu</div>
    manueMask = <div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50 bg-shadow" onClick={()=>setMenu(false)}></div>}
    return (
    <nav>
        <span>
        <FontAwesomeIcon icon={faBars} onClick={()=>setMenu(!showMenu)} className=""/>
        </span>
        {manueMask}
        {manue}
    </nav>
        )
}
export default Manu