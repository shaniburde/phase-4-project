import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
      <>
         <div className="header-background">
            <div>
            <p className="welcome">Welcome, {user.username}!</p>
            <button onClick={handleLogoutClick} className="nav-button">Logout</button>
            </div>
            {/* <Link exact to="/login" className="nav-button">Login</Link> */}
            <Link exact to="/yoga-poses" className="nav-button"> Home </Link>
        </div>
    </>
  )
}