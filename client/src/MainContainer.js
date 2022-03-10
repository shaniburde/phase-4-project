import React, { useState, useEffect } from 'react';
import Video from './Video';
import YogaList from './YogaList';
import { Route, Routes } from "react-router-dom"; 
import CommentList from "./CommentList";
import ShowComment from "./ShowComment"

export default function MainContainer({ yogaData, handleUpdateItem, handleFindVideoData, videoData, user }) {

  const [clicked, setClicked] = useState(false);

  console.log(yogaData)

  return (
    <div>
       <Routes> 
          <Route exact path="/video" element={
              <Video 
                clicked={clicked} 
                setClicked={setClicked}
                videoData={videoData}
                yogaData={yogaData}
                />} 
              />
          <Route exact path="/comments" element={
              <CommentList user={user} />} 
              />
          <Route exact path="/comments/:id" element={
               <ShowComment />
             }
             />
          <Route exact path="*" element={
            <YogaList 
              yogaData={yogaData} 
              clicked={clicked} 
              setClicked={setClicked}
              handleUpdateItem={handleUpdateItem}
              handleFindVideoData={handleFindVideoData}
              />} 
            />
        </Routes>  
    </div>
  )
}
