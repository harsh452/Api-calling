import './App.css';
import Topsection from './Components/Topsection';
import Auth from './Authentication/Auth';
import {BrowserRouter as Router,Routes,Route, Switch} from 'react-router-dom'
import React ,{useState} from 'react';
import {firebaseAuth } from './firebase'
import Randompeople from './Components/Randompeople';
import Header from './Components/Header';
import Savedpeople from './Components/Savedpeople'
function App() {
  const [currentuser , setCurrentuser] = useState(true)

  firebaseAuth.onAuthStateChanged((user)=>{
    if(user){
      return setCurrentuser(true);
    }else{
      return setCurrentuser(false)
    }
  })

  if(currentuser == true){
    return (
      <div>
        <Header />
        <Router>
          <Switch>
          <Route exact path ="/" component = {Topsection}/>

          <Route path ="/randomPeople" component = {Randompeople}/>
          <Route path ="/selectedPeople" component = {Savedpeople}/>

          </Switch>
        </Router>
      </div>
    );
  }else{
    return (
<div>
  <Auth />
</div>
    );
  }
}

export default App;
