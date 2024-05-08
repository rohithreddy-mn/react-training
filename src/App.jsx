import './App.css'
import ForgotPass from './ForgotPass';
import Home from './Home';
import Login from './Login';
// import Login from './Login'
// import { Button } from 'antd'
// import CardComp from './Card';
// import Nav from './Nav';
// import {Row} from 'antd'
// import {useState} from 'react'
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './User';
import Edit from './Edit';
import axios from 'axios';
import { useState } from 'react';
import Search from './Search';
import Cakes from './Cakes';
import CakeDetail from './CakeDetail';

function App() {
  // var card1={
  //   name: 'Virat',
  //   desc: 'batsman'
  // }
  // var card2={
  //   name:'Dhoni',
  //   desc: 'WK',
  //   isCaptain:'Captain'
  // }
  // let [join,setJoin] = useState(0);
  // var [user,setUser] = useState(['Rohith']);
  
  // var [user,setUser] = useState(0);
  //   var [people,setPeople] = useState([]);
  //   var username = "";
    // function joinmeeting(){
    //     setUser(user+1);
    //     people.push(username);
    //     people = [...people];
    //     setPeople(people)
    // }
    // function getName(event){
    //     username = event.target.value;
    // }
  

  return (
    <>
      {/* <Nav/>
      <Login/>
      <Button>Submit</Button>
      <div style={{margin:"200px"}}>
        <Row>
          <CardComp card={card1}/>
          <CardComp card={card2}/>
          </Row> 
      </div> */}

      {/* <Button onClick={()=>setJoin(join+1)} type='primary'>Join Meeting</Button>
      <h4>People Joined: {join}</h4> */}
      {/* <Login></Login> */}



      {/* <div>
            People Joined :<h1>{user}</h1>
            <input type="text" placeholder="name" onChange={getName}></input>
            <Button onClick={joinmeeting}>Join Metting</Button>
            {
                people.map((each)=>{
                   return <div>{each}</div>
                })
            }
        </div> */}


        {/* <Signup/> */}


        <div>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/forgot' element={<ForgotPass></ForgotPass>}></Route>
                <Route path='/signup' element={<Signup></Signup>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path='/user' element={<User></User>}></Route>
                <Route path='/edit/:userid' element={<Edit></Edit>}></Route>
                <Route path='/search' element={<Search/>}></Route>
                <Route path='/cakes' element={<Cakes></Cakes>}></Route>
                <Route path='cakes/:cakeid' element={<CakeDetail></CakeDetail>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
    </>
  )
}

export default App
