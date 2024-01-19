import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import TankDetails from "../TankDetails";
import { useNavigate } from "react-router-dom";

export default function NewTank(props) {
 const [tankName, setTankName] = useState("")
 const navigate = useNavigate();
 const handleSub = e=>{
  e.preventDefault();
  API.createTank(tankName,props.token).then(tank=>{
    navigate(`/tank/${tank.id}`)
  }).catch(err=>{
    console.log(err);
  })

 }
  return (
    <>
      {props.isLoggedIn?(
        <div className="NewTank">
         
            <form onSubmit={handleSub}>
            <input type="text" value={tankName} onChange={e=>setTankName(e.target.value)}/>
            <button>Create tank</button>
            </form>
            
    </div>
        ):(
          <h1>Login first!</h1>
        )}
    </>
  );
}
