import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cakes() {
    const [cakes, setCakes] = useState([]);
    const Navigate = useNavigate();
    useEffect(() => {
        handleCakes();
    }, []);

    const handleCakes = async () => {
        try {
            const response = await fetch("http://apibyauw.eu-4.evennode.com/api/allCakes");
            const cakesData = await response.json();
            setCakes(cakesData.data);
        } catch (error) {
            console.error("Error fetching cakes:", error);
        }
    };

    function handleClick(e){
            // e.preventDefault();
        Navigate(`/cakes/${e}`)
    }

    return (
            <>  
                <h2>Buy a Cake on you Special Day!!!</h2><br/>
                <span style={{flexDirection:'row', display:'flex', flexWrap:"wrap", gap:"100px"}} >
                        {
                            cakes?.map((cake)=>(
                                    <Card style={{width: 300}} key={cake.cakeid} onClick={()=>{handleClick(cake.cakeid)}} cover={
                                        <img
                                        alt="example"
                                        src={cake.image}
                                        />
                                    }>
                                        <Meta 
                                            avatar={<Avatar src={cake.image}/>}
                                            title={cake.name}
                                            description={cake.price}
                                        />
                                    </Card>
                            ))
                        }
                </span>
            </>
    );
}

export default Cakes;
