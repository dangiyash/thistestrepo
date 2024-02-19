import React, { useState } from 'react'
const fbtn = {
    color: 'blue',
    backroundColor: 'green',
    padding: '20px',
    border: '2px red solid',
    borderRadius : '20px'
}
function Fruit() {
    let [fruit, setFruit] = useState('apple');
    
  return (
    <div>
      <p>the value of fruit is : {fruit}</p>
      <button style = {fbtn} onClick={()=>setFruit('Papaya')}>papaya</button>
      <button style = {fbtn} onClick={()=>setFruit('grapers')}>grapes</button>
      <button style = {fbtn} onClick={()=>setFruit('jatimnm')}>jatimm</button>
      <button style = {fbtn} onClick={()=>setFruit('choudhary')}>choudhary</button>
    </div>
  )
}

export default Fruit;
