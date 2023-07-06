import React from 'react';
import BasicExample from './component/nav';
import UncontrolledExample from './component/slider';
import './App.css';
import ResponsiveRow from './component/activeusers';
import Feature from './component/features';
import Control from './component/control';
import playStore from './component/download';


function App() {
  return (
   <div>
   <div className='head'>
   <BasicExample/> 
   <UncontrolledExample/>

   </div>
   <div className='actusers'> 
   <ResponsiveRow ></ResponsiveRow>
   
   </div>
   <div className='feature'>
    <Feature></Feature>
    <div><Control></Control></div>
   </div>
   <div> <playStore/></div>
   
   
   
   
  
   
   </div>
  );
}

export default App;
