import React, { Component } from 'react'
import {  Row,Col } from 'react-bootstrap';
import { googleProvider, firebaseAuth } from '../firebase'
import google from '../images/google.png'
import acc from '../images/account.png'
import { Button } from '@mui/material';

export class auth extends Component {

    signingoogle = (e) => {
        var provider = googleProvider;
        firebaseAuth.signInWithPopup(provider).then((res) => {
            console.log(res);
        })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div style={{textAlign:'center',overflowX:'hidden'}}>
                <Row style={{marginTop:'50px'}}>
                 
                    <Col>

                        <div style={{ borderRadius: '45px', height: 'inherit', width: '300px', backgroundColor: 'black' ,textAlign:'center',marginTop:'100px'}} className="card card_red text-center">
                            <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={google}></img>
                            <h2 style={{ color: 'white' }}>Google Signin</h2>
                            <div  className='title' style={{}}>
                                This is a google signin system
                                <Button onClick={this.signingoogle} >Google signin</Button>
                            </div>

                        </div>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default auth
