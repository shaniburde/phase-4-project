import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import Login from './Login';
import MainContainer from './MainContainer';

function App() {

  const [yogaData, setYogaData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/yoga_poses`)
      .then((r) => r.json())
      .then((pose) => {
        setYogaData(pose);
      });
  }, []);

  return (
    <>
    <div className="App">
      <Header />
      <Login />
      <MainContainer yogaData={yogaData}/>
    </div>
    </>
  );
}

export default App;
