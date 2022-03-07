import React, { useState } from 'react';
import Video from './Video';
import YogaList from './YogaList';

export default function Maincontainer({yogaData}) {

  const {video} = yogaData

  const [clicked, setClicked] = useState(false);
  const [yogaVideo, setYogaVideo] = useState("")

  function findVideo(clickedYogaId){
    const yogaYoutubeVideo = video.filter((v) => {
      if (v.id === clickedYogaId.id) {
        return yVideo
      } else {
        return null
      }
    });
    setYogaVideo(yVideo)
  }


  return (
    <div>
    {clicked ? 
    (<Video 
      yogaData={yogaData}
      clicked={clicked} 
      setClicked={setClicked}
      />) : 
    (<YogaList 
      yogaData={yogaData} 
      clicked={clicked} 
      setClicked={setClicked}/>)
    }
    </div>
  )
}
