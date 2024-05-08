import { useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

function Search(){
    // let [searchParams, setSearchParams] = useSearchParams();
    const Navigate = useNavigate();
    let [search, setSearch] = useState();
    let [searchparams,setSearchParams] = useSearchParams();


    function handleSearch(event){
        event.preventDefault();
        Navigate('/search?name='+search)
        console.log(searchparams.get('name'))
    }

    return(
        <>
            <input placeholder="Search" onChange={(e)=>setSearch(e.target.value)}></input>
            <button type="submit" onClick={handleSearch}>Search</button>
        </> 
    )
}

export default Search;