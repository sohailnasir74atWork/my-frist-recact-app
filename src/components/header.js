import React from "react"
import Manu from "./manu"
function Header(){
    return (
        <header className="bg-gray-300 border-b p-3 flex justify-between items-center text-green font-bold">
            <span className="text-b">
                Khabun ki Tabeer
            </span>
            
            <Manu/>

        </header>
    )
}

export default Header