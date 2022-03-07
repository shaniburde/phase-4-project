import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from './Header';
import Login from './Login';
import MainContainer from './MainContainer';

function App() {

  const [yogaData, setYogaData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/yoga_poses")
      .then((r) => r.json())
      .then((pose) => {
        setYogaData(pose);
      });
  }, []);

  return (
    <>
    <div className="App">
      <Header />
      <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/yoga-poses" element={<MainContainer yogaData={yogaData}/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
