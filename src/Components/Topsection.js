import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import '../Css/Topsection.css'
import man from '../images/front.png'
function Topsection() {
    return (
        <div style={{ backgroundColor: '#242424', height: '100vh',overflowX:'hidden' ,textAlign:'center'  }}>
           <Row style={{marginTop:'50px'}}>
               <Col style={{marginTop:'120px'}}>
               <div style={{color:'white'}}>
                   <h1>
                       Worlds first Human record
                   </h1><br/>
                   <h1>
                       At your finger Tips
                   </h1>
               </div><br/><br/>
               <Button size='lg' variant='outline-warning'>
                   RELOAD
               </Button>
               </Col>
               <Col>
               <div style={{color:'white'}}>
                   <img className="topImage" src={man}></img>
               </div>
               </Col>
           </Row>
        </div>
    )
}

export default Topsection
