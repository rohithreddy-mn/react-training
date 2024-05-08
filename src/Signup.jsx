import { useState } from "react";
import Datatable from "./Datatable";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import User from "./User";
import axios from "axios";

function Signup(){
    let [name, setName] = useState('')
    let [age, setAge] = useState()
    let [datatable, setdatatable] = useState([{id:0, name:'rohith', age:0}])
    let [id, setId] = useState(0)
    let [pass,setPass] = useState();
    let [mail,setMail] = useState();
    let [user,setuser] = useState({name:'name',password:'pass',email:'rohithreddychalla313@gmail.com'})

    const Navigate = useNavigate();

    function handleHome(){
        Navigate('/')
    }

    function handleClick(e){
        e.preventDefault();
        // setId(id+=1)
        // console.log(id)
        // setdatatable([...datatable, {id, name, age,},])
        // console.log(datatable)
        // datatable.map((ea)=>(
        //     console.log(ea.name)
        // ))
    }
  
    function createAccount(){
        console.log(user)
      axios({
        url:'http://apibyauw.eu-4.evennode.com/api/register',
        method: "post",
        data:user
      }).then((res)=>{
        console.log(res)
    },(error)=>{console.log(error)})
    }

    return(
        <>
            {/* <input type="text" placeholder="UserName" onChange={(e)=>setName(e.target.value)}></input>
            <input placeholder="Age" onChange={(e)=>setAge(e.target.value)}></input> */}
            {/* <label>
                <input type="text" placeholder="Password"></input>
            </label> */}
            {/* <button type="submit" onClick={handleClick}>Submit</button>
            <Datatable datatable={datatable}/> */}
            {/* <button onClick={handleHome}>Back to Home!</button> */}

            <input placeholder="username" onChange={(e)=>setName(e.target.value)}></input>
            <input placeholder="email" onChange={(e)=>setMail(e.target.value)}></input>
            <input placeholder="password" onChange={(e)=>setPass(e.target.value)}></input>
            <button onClick={createAccount} type="submit">submit</button>
            {/* <User/> */}
        </>
    )
}

export default Signup;