import React from 'react';
import Container from 'react-bootstrap/Container';




import './nav.css';
import TextControlsExample from './searchbar';



function BasicExample() {
  return (
   
      <Container>
       
         
        
        <div className='headtitle '>Make Your Business <br></br>More Powerful</div>
        <div className='head-support'>
          <div><i class="bi bi-check-circle-fill"></i> Life time Support</div>
          <div> <i class="bi bi-check-circle-fill"></i> No CC Register</div>
         </div>
         <div className='search-head'>
         <TextControlsExample></TextControlsExample>
         </div>
    
      </Container>
    
  );
}

export default BasicExample;