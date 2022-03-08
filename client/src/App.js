import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from './Header';
import Login from './LoginForm';
import MainContainer from './MainContainer';

function App() {

  const [yogaData, setYogaData] = useState([])
  const [user, setUser] = useState(null);
  
    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);

  useEffect(() => {
    fetch("http://localhost:4000/yoga_poses")
      .then((r) => r.json())
      .then((pose) => {setYogaData(pose)});
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      <Routes>
          <Route exact path="/login" element={<Login onLogin={handleLogin} />}/>
          <Route exact path="/yoga-poses" element={<MainContainer yogaData={yogaData} />}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
