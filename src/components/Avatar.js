import React from "react";
const avtstyle = {
    padding: '20px',
    border: 'solid 3px white',
   borderRadius: '30px',
   
}
function Avatar(propss){
    return(
        <img style={avtstyle} src={propss.src} alt="img" />
    )
}
export default Avatar;