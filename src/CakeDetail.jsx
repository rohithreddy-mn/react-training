import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Image } from "antd";
 
function CakeDetail(){
    const params = useParams();
    const [cakes, setCakes] = useState([]);
    useEffect(()=>{
        getCake();
    },[]);

    const getCake = async () => {
        const response = await fetch("http://apibyauw.eu-4.evennode.com/api/allCakes");
        const cakesData = await response.json();

        const cakes = cakesData.data.filter((cake)=>(
            cake.cakeid === parseInt(params.cakeid)
        ))
        setCakes(cakes)
    }   

    return (
        <div>
            {
            cakes?.map((cake)=>(
                <div key={cake.cakeid}>
                    <Image style={{width: 300}} src={cake.image}></Image>
                    <h3>Cake: {cake.name}</h3>
                    <p>Price: {cake.price}</p>
                </div>
            ))
            }
        </div>
    )
}


export default CakeDetail