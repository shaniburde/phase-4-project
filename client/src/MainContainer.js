import React, { useState, useEffect } from 'react';
import Video from './Video';
import YogaList from './YogaList';
import { Route, Routes } from "react-router-dom"; 

export default function MainContainer({ yogaData, handleUpdateItem, handleFindVideo, videoData }) {

  const [clicked, setClicked] = useState(false);

  const [findId, setFindId] = useState("");

  const [commentData, setCommentData] = useState([]);

  function handleFindId(id){
    setFindId(id)
  }

  useEffect(() => {
    fetch(`http://localhost:4000/yoga_poses/${findId}`)
    .then(r => r.json())
    .then((comments) => setCommentData(comments));
  }, []);

// console.log(commentData)

  return (
    <div>
       <Routes> 
         <Route exact path="/video" element={
            <Video 
              clicked={clicked} 
              setClicked={setClicked}
              videoData={videoData}
              // findId={findId}
              commentData={commentData}
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
