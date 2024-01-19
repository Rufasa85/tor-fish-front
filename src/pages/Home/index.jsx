import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";
import TankThumbnail from "../../components/TankThumbnail";
import { Link } from "react-router-dom";

export default function Home() {
  const [tanks, setTanks] = useState([]);
  useEffect(() => {
    API.getAllTanks()
      .then((tankData) => {
        console.log(tankData);
        setTanks(tankData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="Home">
      <h1>All the tanks</h1>
      <div className="tankFlex">
        {tanks.map((tnk) => (
          <Link to={`/tank/${tnk.id}`}>
            <TankThumbnail key={tnk.id} name={tnk.name} fishes={tnk.Fishes} />
          </Link>
        ))}
      </div>
    </div>
  );
}
