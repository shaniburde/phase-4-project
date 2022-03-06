import React from 'react'

export default function Video({yogaData, clicked, setClicked}) {

    const {video, comments} = yogaData
    
  return (
    <div>
        <iframe 
        width="793" 
        height="580" 
        src={video} 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
    
    </div>
  )
}
