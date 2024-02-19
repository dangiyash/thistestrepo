import React from 'react'
const imgstyle ={
  position:'absolute',
  left: '6%',
  margin:'20px',
    height: '30px',
    padding:'10px'
}
function Logo() {
  return (<div>
    <img style = {imgstyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/YouTube_light_logo_%282017%29.svg/1920px-YouTube_light_logo_%282017%29.svg.png" alt="Logo"></img>
  </div>)
}

export default Logo;
