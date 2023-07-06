import React from "react";
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import './nav.css';
import Image from 'react-bootstrap/Image';

function Feature(){
    return(
        
        <Container>
            <Row>
                <Col>
                <Image className="wireframe" src="../image/wireframe.png"/>
                </Col>
                <Col className="f-content">
                <div > 
                <h className='Rhead rfature'>Feature to help <br></br> Your team Succeed</h>
                    <p className="paragraph rfature">Filler text is text that shares some characteristics of a real written text, 
                        but is random or otherwise generated. It may be used to display a sample of fonts,
                         generate text for testing, or to spoof an e-mail spam filter.</p>
                </div>
                <div className="f-feature">
                    <div>
                        <br></br>
                        <Row className="Mt">
                        <Col>
                        <Row>
                            <Col md={2}><i class="bi bi-check-circle-fill indicator"></i> </Col>
                            <Col><p className="ma-cont">Filler text is text that shares some characteristics of a real</p> </Col>
                        </Row>
                        <Row>
                            <Col md={2}><i class="bi bi-check-circle-fill indicator"></i> </Col>
                            <Col><p className="ma-cont">Filler text is text that shares some characteristics of a real</p> </Col>
                        </Row>
                        
                        </Col>
                        <br></br>
                        <Col>
                       
                        <Row>
                            <Col md={2}><i class="bi bi-check-circle-fill indicator"></i> </Col>
                            <Col><p className="ma-cont">Filler text is text that shares some characteristics of a real</p> </Col>
                        </Row>
                        <Row>
                            <Col md={2}><i class="bi bi-check-circle-fill indicator"></i> </Col>
                            <Col><p className="ma-cont">Filler text is text that shares some characteristics of a real</p> </Col>
                        </Row>
                        
                        </Col>
                        </Row>
                 

                    
                    
                    
                    </div>

                </div>
               
                </Col>
            </Row>
           
        </Container>
        
        );
}

export default Feature;