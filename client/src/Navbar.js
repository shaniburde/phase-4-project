import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user, handleLogout }) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

  return (
      <>
         <div className="header-background">
        {user ? (
            <div>
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout}>Logout</button>
            </div>
            ) : (
            <Link exact to="/login" className="nav-button">Login</Link>
            )}
        <Link exact to="/yoga-poses" className="nav-button"> Home </Link>
        </div>
    </>
  )
}