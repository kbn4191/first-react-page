import React from "react";
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import './nav.css';
import Image from 'react-bootstrap/Image';

function Control(){
    return(
        
        <Container className="ctr-body">
          
           <div className="ctr-layout">
           <div><div className='Rhead ctr '>Control In One Place</div>
           <p>Filler text is text that shares some characteristics of a real written text, but is random <br></br>
           or otherwise generated. It may be used to display a sample of fonts</p>
           <Button className="btn-ctr">start 14 Days Trailer</Button></div>
           </div>
           <div className="d-flex justify-content-center ctr-box-hld">
            <div className=" ctr-box">
                <div>
                    <div className="ctr-circle"><i class="bi bi-graph-down"></i></div>
                    <div className="box-hld">Structured Report</div>
                    <p className="box-para">Filler text is text that shares <br></br> some characteristics of a <br></br> real written text</p>
                
                </div>
                
            </div>
            <div className="ctr-box">
                <div><div className="ctr-circle"><i class="bi bi-cloud-fill"></i></div>
                <div className="box-hld">Cloud System</div>
                    <p className="box-para">Filler text is text that shares <br></br> some characteristics of a <br></br> real written text</p>
                </div>
                
            </div>
            <div className="ctr-box">
                <div><div className="ctr-circle"><i class="bi bi-clock-fill"></i></div>
                <div className="box-hld">24/7 Support</div>
                    <p className="box-para">Filler text is text that shares <br></br> some characteristics of a <br></br> real written text</p></div>
                
            </div>
           </div>
           
        </Container>
        
        );
}

export default Control;