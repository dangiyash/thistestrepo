import React,{useState} from 'react'
const fbtn = {
    color: 'blue',
    backroundColor: 'green',
    padding: '20px',
    border: '2px red solid',
    borderRadius : '20px'
}
function Counter() {
    let [count,setCount] = useState(0);
    function incCount(){
        setCount(count+1);
    }
  return (
    <div>
     
      <button style = {fbtn} onClick = {incCount}>click</button> the count is : {count}
    </div>
  );
}

export default Counter;
