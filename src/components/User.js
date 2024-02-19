
import React from 'react'
const buttonstyle = {
  borderRadius : '40px',
  paddingLeft: '10px',
  paddingRight: '10px',
  margin : '20px',
  fontSize: '30px',
  color: 'white',
  backgroundColor: 'red',
  border: '#382020 2px solid ',
  position: 'absolute',
  left: '90%'
  
  
}

function User() {
  return (
    <div >
      <button style={buttonstyle} id="button"  > Y</button>
    </div>
  )
}

export default User;
