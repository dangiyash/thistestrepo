
import React from 'react'
let buttonstyle = {
  borderRadius : '40px',
  paddingLeft: '10px',
  paddingRight: '10px',
  margin : '20px',
  fontSize: '30px',
  color: 'white',
  backgroundColor: '#382020',
  border: '#382020 2px solid ',
  
  
  
}
function trigger(){
    buttonstyle = {
        borderRadius : '40px',
        paddingLeft: '10px',
        paddingRight: '10px',
        margin : '20px',
        fontSize: '30px',
        color: 'white',
        backgroundColor: 'white',
        border: 'white 2px solid '
    
    
    
    }
}
function Micsearch() {
  return (
    <div onMouseEnter={trigger}>
      <button style={buttonstyle} id="button"  >🎙</button>
    </div>
  )
}

export default Micsearch;
