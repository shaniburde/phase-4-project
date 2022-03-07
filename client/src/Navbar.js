import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="header-background">
        <Link exact to="/login" className="nav-button"> Login </Link>
        <Link exact to="/yoga-poses" className="nav-button"> Home </Link>
        
    </div>
  )
}
