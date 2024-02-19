import React from 'react'
import Sidebutton from './Sidebutton';
import Logo from './Logo';
import Searchbar from './Searchbar';
import Micsearch from './Micsearch';
import Createvid from './Createvid';
import Notify from './Notify';
import User from './User';
const ssttll ={
   
}

const dstyle = {
    
    display: 'flex',
    flexDirection: 'row',
   
}
function Topbar() {
  return (
    <div style ={ssttll}>
    <div style={dstyle}>
      <Sidebutton/>
      <Logo/>
      <Searchbar/>
      <Createvid />
      <Notify/>
      <User/>
    </div>
    </div>
  )
}

export default Topbar;
