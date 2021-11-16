import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { firestore, firebaseAuth } from "../firebase";
import { Row, Col, Card } from 'react-bootstrap'
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Slider } from '@mui/material';
import '../Css/Card.css'
import filter from '../images/sort.png'
import Loader from './Loader';


function Randompeople() {
  const [people, setPeople] = useState([])
  const [gender, setGender] = useState('all')
  const [noMore, setnoMore] = useState(true);
  const [cityData, setCityData] = useState(null);
  const [Age, setAge] = useState(100);

  useEffect(() => {
    const getPeople = async () => {
      const response = await fetch(`https://randomuser.me/api/?results=10`);
      const data = await response.json();
      setPeople(data.results)
    }
    getPeople()
  }, [])
  console.log(people);


  const fetchPeople = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=10`);
    const data = await response.json();
    return data.results
  }


  const fetchData = async () => {
    if (people.length >= 900) {
      setnoMore(false)
    }
    const peoplefromServer = await fetchPeople()
    setPeople([...people, ...peoplefromServer])

  }

  const handleValue = (e) => {
    setGender(e.target.value)
  }
  const handleCity = (e) => {
    setCityData(e.target.value)
    if(e.target.value.length == 0){
      setCityData(null)
    }
  }
  const handlebarValue = (e, newValue) => {
   setAge(newValue);
   console.log(newValue);
  }

  const renderCard = () => {

    if (gender == 'male') {
      return <div class="row" style={{ marginTop: '50px' }}>

        {people ? people.map((peopledata, index) => {

          if (peopledata.gender == gender && (cityData == null || peopledata.location.city == cityData) && peopledata.dob.age <= Age) {
            return (<div className="col-lg-5 col-md-6" >

              <div style={{ borderRadius: '45px', height: 'inherit', width: '300px', backgroundColor: 'black' }} className="card card_red text-center">
                <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={peopledata.picture.large}></img>
                <h2 style={{color:'white'}}>{peopledata.name.first}</h2>
                <div className='title' style={{}}>
                  <p >email-{peopledata.email}</p>
                  <p>phone-{peopledata.cell}</p>
                  <p>address-{peopledata.location.city},{peopledata.location.state}</p>
                  <p>AGE-{peopledata.dob.age}</p>
                </div>
                <Button onClick={
                  () => {
                    addData(peopledata.name.first, peopledata.email, peopledata.cell, peopledata.location.city, peopledata.location.state, peopledata.gender,peopledata.picture.large,peopledata.dob.age)

                  }
                }>SAVE</Button>

                {/* <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p> */}
              </div>

              <Toolbar />

            </div>


            )
          }

        }) : null}
      </div>
    } else if (gender == 'female') {
      return <div class="row" style={{ marginTop: '50px' }}>

        {people ? people.map((peopledata, index) => {

          if (peopledata.gender == gender && (cityData == null || peopledata.location.city == cityData )&& peopledata.dob.age <= Age) {
            return (<div className="col-lg-5 col-md-6" >

              <div style={{ borderRadius: '45px', height: 'inherit', width: '300px', backgroundColor: 'black' }} className="card card_red text-center">
                <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={peopledata.picture.large}></img>
                <h2 style={{color:'white'}}>{peopledata.name.first}</h2>
                <div className='title' style={{}}>
                  <p >email-{peopledata.email}</p>
                  <p>phone-{peopledata.cell}</p>
                  <p>address-{peopledata.location.city},{peopledata.location.state}</p>
                  <p>AGE-{peopledata.dob.age}</p>
                </div>
                <Button onClick={
                  () => {
                    addData(peopledata.name.first, peopledata.email, peopledata.cell, peopledata.location.city, peopledata.location.state, peopledata.gender,peopledata.picture.large,peopledata.dob.age)

                  }
                }>SAVE</Button>

                {/* <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p> */}
              </div>

              <Toolbar />

            </div>


            )
          }


        }) : null}
      </div>
    } else {
      return <div class="row" style={{ marginTop: '50px' }}>

        {people ? people.map((peopledata, index) => {

          if ((cityData == null || peopledata.location.city == cityData) && peopledata.dob.age <= Age) {
            return (<div className="col-lg-5 col-md-6" >

              <div style={{ borderRadius: '45px', height: 'inherit', width: '300px', backgroundColor: 'black' }} className="card card_red text-center">
                <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={peopledata.picture.large}></img>
                <h2 style={{color:'white'}}>{peopledata.name.first}</h2>
                <div className='title' style={{}}>
                  <p >email-{peopledata.email}</p>
                  <p>phone-{peopledata.cell}</p>
                  <p>address-City:{peopledata.location.city}, state: {peopledata.location.state}</p>
                  <p>AGE-{peopledata.dob.age}</p>
                </div>
                <Button onClick={
                  () => {
                    addData(peopledata.name.first, peopledata.email, peopledata.cell, peopledata.location.city, peopledata.location.state, peopledata.gender,peopledata.picture.large,peopledata.dob.age)

                  }
                }>SAVE</Button>

                {/* <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p> */}
              </div>

              <Toolbar />

            </div>


            )
          }

        }) : null}
      </div>
    }
  }
  const addData = (firstName, EMAIL, PHONE, CITY, STATE, GENDER,PHOTO,AGE) => {
    firestore
      .collection('SELECTED PEOPLE')
      .doc().
      set({
        name: firstName,
        email: EMAIL,
        phone: PHONE,
        city: CITY,
        state: STATE,
        gender: GENDER,
        photo:PHOTO,
        age:AGE
      }).then(() => {
        alert("PERSON SUCCESSFULLY ADDED")
      })
  }
  return (
    <div>
      <InfiniteScroll
        dataLength={people.length} //This is important field to render the next data
        next={fetchData}
        hasMore={noMore}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }

      >
        <Container>
          <Row>
            <Col lg={3} md={12} >
              <div style={{ marginTop: '20px' }}>

                <h5><img style={{ height: '30px', width: '30px' }} src={filter}></img> filter</h5><br></br>

                <FormControl component="fieldset">
                  <h5>Gender</h5>
                  <RadioGroup
                    aria-label="gender"
                    defaultValue="all"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel onChange={handleValue} value="all" control={<Radio size='small' />} label="All" />
                    <FormControlLabel onChange={handleValue} value="male" control={<Radio size='small' />} label="MALES" />
                    <FormControlLabel onChange={handleValue} value="female" control={<Radio size='small' />} label="FEMALES" />


                  </RadioGroup>
                </FormControl><br /><br />
                <h5>City</h5>
                <input onChange={handleCity} style={{ display: 'block' }} type='text' ></input><br />
                <h5>Age</h5>

                <Slider
                  style={{ color: 'black', maxWidth: '250px', minWidth: '100px', display: 'inline-block' }}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={100}
                  min={10}
                  max={100}
                  onChange= {handlebarValue}
                />
              </div>
            </Col>
            <Col>
              {renderCard()}
            </Col>
          </Row>




        </Container>

      </InfiniteScroll>

    </div>


  )
}

export default Randompeople
