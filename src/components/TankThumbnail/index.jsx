import React from 'react'
import "./style.css"
import FishThumbnail from '../FishThumbnail'

export default function TankThumbnail(props) {
    return (
        <div className="TankThumbnail">
            <h1>{props.name}</h1>
            {props.fishes.map(fsh=><FishThumbnail key={fsh.id} width={fsh.length} color={fsh.color} name={fsh.name}/>)}
        </div>
    )
}