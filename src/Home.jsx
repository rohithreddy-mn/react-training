import {  useNavigate } from "react-router-dom";
import User from "./User";

function Home(){
    const Navigate = useNavigate();
    function handleLogin(){
        Navigate('/login')
    }
    function handleSignup(){
        Navigate('/signup')
    }
    return(
        <>
            <h3>Welcome!</h3>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Signup</button>
            <input ></input>
            <User/>
        </> 
    )
}

export default Home;