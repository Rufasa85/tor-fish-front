import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import Fish from "../../components/Fish";

export default function TankDetails() {
  const [tank, setTank] = useState({});
  const [hasData, setHasData] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    API.getOneTank(id)
      .then((data) => {
        if (!data) {
            setHasData(false)
        }else{
            setTank(data);
            setHasData(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    {hasData?(
        <div>
        <h1>{tank.name}</h1>
        <div className="TankDetails">
            {tank.Fishes.map(fsh=><Fish key={fsh.id} name={fsh.name} color={fsh.color} width={fsh.length}/>)}
        </div>
        <div className="seaFloor"></div>
        </div>
        ):<h3>No data for this tank</h3>}
    </>
  );
}
