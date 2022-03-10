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
            <button onClick={handleLogoutClick} className="logout-button">Logout</button>
            </div>
            <Link exact to="/comments" className="nav-button"> Namaste </Link>
            <Link exact to="*" className="nav-button"> Home </Link>
        </div>
    </>
  )
}