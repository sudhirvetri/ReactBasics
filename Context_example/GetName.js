// import { input,event } from "@testing-library/user-event/dist/types/event";
import React  from "react";
import { useContext } from "react";
import { AppContext } from "./App";

const GetName =()=>{
    
    const {setName}=useContext(AppContext);

   
    return(
        <div>
        <table>
            <tr>
                <td><h3>Enter name:</h3></td>
                <td><input type="text" placeholder="Enter your name"
                 onChange={e=>setName(e.target.value)}></input></td>
            </tr>
        </table>
        
        
    </div>
    );

}
    
    



export default GetName;