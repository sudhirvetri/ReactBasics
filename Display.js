import React  from "react";

const Display=(props)=>
{
    const name=props.name;
    return (
        <div>
            <label>Name : {name}</label>
        </div>
    );
}

export default Display;
