import React, { useState, useEffect } from 'react';
import Video from './Video';
import YogaList from './YogaList';
import { Route, Routes } from "react-router-dom"; 

export default function MainContainer({ yogaData, handleUpdateItem, handleFindVideo, videoData }) {

  const [clicked, setClicked] = useState(false);

  const [findId, setFindId] = useState("")

  function handleFindId(id){
    setFindId(id)
  }


  return (
    <div>
       <Routes> 
         <Route exact path="/video" element={
            <Video 
              clicked={clicked} 
              setClicked={setClicked}
              videoData={videoData}
              findId={findId}
              />} 
            />
        <Route exact path="*" element={
          <YogaList 
            yogaData={yogaData} 
            clicked={clicked} 
            setClicked={setClicked}
            handleUpdateItem={handleUpdateItem}
            handleFindVideo={handleFindVideo}
            handleFindId={handleFindId}
            />} 
          />
        </Routes>  
    </div>
  )
}
