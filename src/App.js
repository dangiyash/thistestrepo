import Sidebutton from './components/Sidebutton';
import User from './components/User';
import Topbar from './components/Topbar';
import Card from './components/Card'
const ul= {
  display: 'flex',
  flexWrap: 'wrap',
  paddingLeft: '0',
  
}
const li ={
  listStyle: 'none',
  flex: '0 0 33.333333%'
}
const heada = {
  position : 'sticky',
  top: 0,
  width: '100%',
  zIndex: '999',
  boxShadow: '0 2px 24px 0 rgb(0 0 0 / 15%)',
  backgroundColor: '#382020' ,
  animation: '500ms ease-in-out 0s normal none 1 running fadeInDown',
  paddingTop: '0px',
  paddingBottom: '0px'
}
export default function App(){
  return(
    <div>
      <header style = {heada}>
      
         <Topbar/>

      </header> 
     <div >
       <ul style ={ul}>
         <li style ={li}> <Card avt ="https://via.placeholder.com/1600x900" desc="this is vid1"/> </li>
         <li style ={li}> <Card avt ="https://via.placeholder.com/1600x900"/> </li>
         <li style ={li}> <Card avt ="https://via.placeholder.com/1600x900"/> </li>
         <li style ={li}> <Card avt ="https://via.placeholder.com/1600x900"/> </li>
         <li style ={li}> <Card avt ="https://via.placeholder.com/1600x900"/> </li>
         <li style ={li}> <Card avt ="https://via.placeholder.com/1600x900"/> </li>
         <li style ={li}> <Card avt ="https://via.placeholder.com/1600x900"/> </li>
         <li style ={li}> <Card avt ="https://via.placeholder.com/1600x900"/> </li>
         <li style ={li}> <Card avt ="https://via.placeholder.com/1600x900"/> </li>
        </ul>
      </div>
  </div> );
}