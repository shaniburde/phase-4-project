import React, { useState } from 'react';
import Video from './Video';
import YogaList from './YogaList';

export default function MainContainer({ yogaData, handleUpdateItem, handleFindVideo, videoData }) {

  const [clicked, setClicked] = useState(false);
  const [yogaVideo, setYogaVideo] = useState("")
  


  // function findVideo(clickedYogaCard){
  //   const yogaYoutubeVideo = yogaData.filter((video) => {
  //     if (video.id === clickedYogaCard) {
  //       return video
  //     }
  //   })
  //   setYogaVideo(yogaYoutubeVideo.video)
  // };

  // const video = yogaData.map((data) => data.video)
  // console.log(video)
  // console.log(yogaData)
  console.log(videoData)

  return (
    <div>
      {clicked ? 
       (<Video 
        yogaData={yogaData}
        clicked={clicked} 
        setClicked={setClicked}
        // yogaVideo={yogaVideo}
        videoData={videoData}
        />) 
        : 
      (<YogaList 
        yogaData={yogaData} 
        clicked={clicked} 
        setClicked={setClicked}
        handleUpdateItem={handleUpdateItem}
        handleFindVideo={handleFindVideo}
        // findVideo={findVideo}
        />)
      }
    </div>
  )
}
