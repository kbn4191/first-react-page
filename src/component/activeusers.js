import React from "react";
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import './nav.css';
import Image from 'react-bootstrap/Image';

function ResponsiveRow(){
    return(
        
        <Container>
            <Row>
                <Col>
                <div className="content-active-holder">
                    <h className='Rhead'>Okay Let's See <br></br> Dtask in Number</h>
                    <p className="paragraph">Filler text is text that shares some characteristics of a real written text, 
                        but is random or otherwise generated. It may be used to display a sample of fonts,
                         generate text for testing, or to spoof an e-mail spam filter.</p>
                         <div className="activebox d-flex justify-content-between ">
                            <div className="d-flex justify-content-center">
                            <div className="text-center">
                            <div className="userbox-holder">
                                <h className="box-text">12M</h>
                            </div>
                            <br></br>
                            <h className="box-subname">Active Users</h>
                            </div>
                            </div>
                            
                            <div className="text-center">
                            <div className="regular">
                                <h className="box-text t-regular">16</h>
                            </div>
                            <br></br>
                            <h className="box-subname">Language</h>
                            </div>
                            <div className="text-center">
                            <div className="regular">
                                <h className="box-text t-regular">247</h>
                            </div>
                            <br></br>
                            <h className="box-subname">Active Users</h>
                            </div>
                            


                         </div>

                </div>
                </Col>
                <Col>
                <Image className="image-active" src="../image/iphone14.png"/>
                </Col>
            </Row>
           
        </Container>
        
        );
}

export default ResponsiveRow;