import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import Fish from "../../components/Fish";

export default function TankDetails(props) {
  const [tank, setTank] = useState({});
  const [hasData, setHasData] = useState(false);
  const [myTank, setMyTank] = useState(false)
  const [fishName, setFishName] = useState("");
  const [fishColor, setFishColor] = useState("#c0ffee");
  const [fishLength, setFishLength] = useState(100);
  const { id } = useParams();
  useEffect(() => {
    API.getOneTank(id)
      .then((data) => {
        if (!data) {
            setHasData(false)
        }else{
            setTank(data);
            setHasData(true);
            setMyTank(props.userId===data.UserId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSub = e=>{
    e.preventDefault();
    API.createFish({
      tankId:id,
      name:fishName,
      color:fishColor,
      length:fishLength
    },props.token).then(data=>{
      setFishColor("#c0ffee");
      setFishLength(100);
      setFishName("");
      API.getOneTank(id)
      .then((data) => {
        if (!data) {
            setHasData(false)
        }else{
            setTank(data);
            setHasData(true);
            setMyTank(props.userId===data.UserId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }).catch(err=>{
      console.log('err', err)
    })
  }
  return (
    <>
    {hasData?(
        <div>
        <h1>{tank.name}</h1>
            {myTank&&
            <div>
              <h3>Add a fish!</h3>
            <form onSubmit={handleSub}>
                <input type="text" value={fishName} onChange={e=>setFishName(e.target.value)}/>
                <input type="number" value={fishLength} onChange={e=>setFishLength(e.target.value)}/>
                <input type="color" value={fishColor} onChange={e=>setFishColor(e.target.value)}/>
                <button>Add fish!</button>
              </form>
              <Fish name={fishName} width={fishLength} color={fishColor}/>
              </div>
              }
        <div className="TankDetails">
            {tank.Fishes.map(fsh=><Fish key={fsh.id} name={fsh.name} color={fsh.color} width={fsh.length}/>)}
        </div>
        <div className="seaFloor"></div>
        </div>
        ):<h3>No data for this tank</h3>}
    </>
  );
}
