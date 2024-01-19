import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    
    return (
        <div className="NavBar">
           <Link to="/">Home</Link>
           <Link to="/login">Login</Link>
           <Link to="/signup">Signup</Link>
           <Link to="/newtank">New Tank</Link>
        </div>
    )
}
