import React, { useState, useEffect } from 'react';
import Video from './Video';
import YogaList from './YogaList';

export default function MainContainer() {

  const [clicked, setClicked] = useState(false);
  const [yogaVideo, setYogaVideo] = useState("")
  const [yogaData, setYogaData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/yoga_poses")
      .then((r) => r.json())
      .then((pose) => {setYogaData(pose)});
  }, []);

  console.log(yogaData)
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
  console.log(yogaData)

  return (
    <div>
      {/* {clicked ?  */}
      {/* // (<Video  */}
      {/* //   yogaData={yogaData}
      //   clicked={clicked} 
      //   setClicked={setClicked}
      //   yogaVideo={yogaVideo}
      //   />) :  */}
      
      <YogaList 
        yogaData={yogaData} 
        clicked={clicked} 
        setClicked={setClicked}
        // findVideo={findVideo}
        />
    
    </div>
  )
}
