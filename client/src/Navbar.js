import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <button>click</button>
        <Link exact to="/yoga-poses" className="nav-button"> Home </Link>
        {/* <Link exact to="/login" className="nav-button"> Login/Logout </Link>
        <Link exact to="/poses" className="nav-button"> Yoga Poses </Link> */}
    </div>
  )
}
