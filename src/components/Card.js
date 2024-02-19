import React from "react";

function Card(props){
    
    return (
   <div className = 'card'>
        <Avatar src={props.avt}/>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>

    </div>    
    );

}
const avtstyle = {
    height: '200px',
    padding: '20px',
    border: 'solid 3px white',
   borderRadius: '30px',
   
}
function Avatar(propss){
    return(
        <img style={avtstyle} src={propss.src} alt="img" />
    )
}
export default Card;