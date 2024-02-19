
import React from 'react'
const buttonstyle = {
  borderRadius : '40px',
  paddingLeft: '10px',
  paddingRight: '10px',
  margin : '20px',
  fontSize: '30px',
  color: 'white',
  backgroundColor: '#382020',
  border: '#382020 2px solid ',
  position: 'absolute',
  left: '80%'

  
  
}

function Createvid() {
  return (
    <div >
      <button style = {buttonstyle} id="button"  >▷</button>
    </div>
  )
}

export default Createvid;
