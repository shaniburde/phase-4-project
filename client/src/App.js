import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from './Header';
import Login from './Login';
import MainContainer from './MainContainer';
import Video from './Video';

function App() {

  const [user, setUser] = useState(null);
  const [yogaData, setYogaData] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:4000/me").then((response) => {
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

    console.log(user)
    console.log(yogaData)

  function handleLogout() {
    setUser(null);
  }


  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <div className="App">
      <Header user={user} setUser={setUser} onLogout={handleLogout} />
      <Routes>
          <Route exact path="/yoga-poses" element={<MainContainer yogaData={yogaData}/>}/>
          <Route exact path="/videos" element={<Video yogaData={yogaData}/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
