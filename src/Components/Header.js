import React, { useState, useEffect } from 'react'
import { Form, Navbar, NavDropdown, Button, Nav, FormControl, Container } from 'react-bootstrap'
import { firestore, firebaseAuth } from "../firebase";
import people from '../images/people.png'
import group from '../images/group.png'
import logout from '../images/logout.png'
import assignment from '../images/assignment.png'

export default function Header() {


function handlelogout() {
    firebaseAuth.signOut()
  }

 

  return (
    <div >

      <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#242424'}} variant='dark'>
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={assignment}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
      Assignment
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* {image()} */}
            </Nav>
            <Nav>


              <img
                alt=""
                src={people}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              <Nav.Link href="/randomPeople">
              <p style={{color:'white',marginRight:'10px'}}>Random People</p>
                </Nav.Link>
              <img
                alt=""
                src={group}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
          <Nav.Link href='/selectedPeople'>
          <p style={{color:'white',marginRight:'10px'}}>Saved People</p>
       </Nav.Link>
              <img
                alt=""
                src={logout}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              <Nav.Link eventKey={2} onClick={handlelogout}>
              <p style={{color:'white'}}>Log out</p>
      </Nav.Link>
            

            </Nav>
          </Navbar.Collapse>

        </Container>

      </Navbar>

    </div>

  )
}
