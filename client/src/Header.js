import React from 'react';
import Navbar from './Navbar';

export default function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }
  
  return (
    <div className="header-background">
      <h1 className="header">Calmer</h1>
      <Navbar user={user} onLogout={onLogout}/>
    </div>
  )
}
