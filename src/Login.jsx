// eslint-disable-next-line no-unused-vars
import React from "react";
import ForgotPass from "./ForgotPass";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){   
    const Navigate = useNavigate();

    function handleClick(e){
        e.preventDefault();
        if(e.target[1].value != 'name' && e.target[2].value !='pass'){
            Navigate('/')
        }
        else{
            axios({
                url:'http://apibyauw.eu-4.evennode.com/api/login',
                method:'post',
                data:{name:e.target[1].value, password:e.target[2].value, email:e.target[0].value}
            }).then(response=>console.log(response),error=>console.log(error))
        }
    }



    return(
        <>
            <form className="form" onSubmit={handleClick}>
                <h2>Create an Account</h2>
                <label>
                    <input placeholder="Email" type="email"></input>
                </label><br/>
                <label>
                    <input placeholder="username" type="username"></input>
                </label><br/>
                <label>
                    <input placeholder="password" type="text"></input>
                </label><br/>
                <button type="submit">Login</button>
            </form>
            <ForgotPass/>
        </>
    )
}

export default Login;