import React  from "react";
import { useContext } from "react";
import { AppContext } from "./App";

const Display=()=>
{
    const {name}= useContext(AppContext);
    
    return (
        <div>
            <label>Name : {name}</label>
        </div>
    );
}

export default Display;