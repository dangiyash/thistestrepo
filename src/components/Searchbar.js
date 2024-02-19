import { React, useState } from "react";
import Search from '../components/Search';
const searchstyle ={
  position: 'absolute',
  left: '40%',
  margin: '20px',
  backgroundColor: '#382020',
  padding: '10px',
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px',
  border: 'solid aqua 0.01px',
 
}

const divStyl ={
   display: 'flex', flexDirection: 'row'
}
function Searchbar() {
  return (<div style={divStyl}>
    
    <Search/>
   <input style = {searchstyle} 
       type="text"
       placeholder="Search here"
        /></div>
    );
   
 
}

export default Searchbar;
