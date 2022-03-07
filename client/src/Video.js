import React from 'react';
// import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";


export default function Video({yogaData, clicked, setClicked}) {

    const {video, comments} = yogaData


    // const videoData = video.filter((v) => {
    //       if (v.id == id) {
    //         return v
    //       } else {
    //         return null
    //       }
    //     })
    

    // function handleBackButton(){
    //     setClicked(!clicked)
    // }

    // const yogaVideo = yogaData.filter((yogaPose) =>
    // <>
    // if(yogaPose.id = )
    // <button onClick={handleBackButton}>Back</button>
    // <iframe 
    // width="793" 
    // height="580" 
    // src={videoData}
    // frameborder="0" 
    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    // allowfullscreen>
    // </iframe>
    // </>
    // )

  return (
    
    <div>
      <YoutubeEmbed yogaData={yogaData} />
    {/* {yogaVideo} */}

    
    {/* <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    /> */}
    </div>
  )
}
