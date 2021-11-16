import React, { Component, useState, useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { firestore, firebaseAuth } from "../firebase";
import { Col, Row } from 'react-bootstrap';
import { Toolbar } from '@mui/material';



export class Savedpeople extends Component {

    constructor(props) {

        super(props)
        this.state = {
            specialPeople: []
        }

    }
    componentDidMount() {
        firestore.collection('SELECTED PEOPLE').get().then((querrySnapshot) => {
            let orData = []
            querrySnapshot.forEach((doc) => {
                orData.push(doc.data())
            })
            this.setState({
                specialPeople: orData
            })
        })
    }

    render() {
        return (
            <div>
                <Row style={{marginTop:'50px'}}>
                {this.state.specialPeople? this.state.specialPeople.map((p)=>{
                  return <Col style={{marginTop:'40px'}} lg={4} md={6}>
                     <div style={{ borderRadius: '45px', height: 'inherit', width: '300px', backgroundColor: 'black' }} className="card card_red text-center">
                <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={p.photo}></img>
                <h2 style={{color:'white'}}>{p.name}</h2>
                <div className='title' style={{}}>
                  <p >email-{p.email}</p>
                  <p>phone-{p.phone}</p>
                  <p>address-City:{p.city}, state: {p.state}</p>
                  <p>AGE-{p.age}</p>
                </div>
              </div>
                  </Col>

                }):null}
                </Row>
               
            </div>
        )
    }
}

export default Savedpeople
