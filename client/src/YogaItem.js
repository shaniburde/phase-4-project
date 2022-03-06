import React, {useState} from 'react';

export default function YogaItem({id, title, image, category, description, favorited, clicked, setClicked}) {
  

  const [liked, setLiked] = useState(false)

  function handleClick(){
    setLiked(!liked)
  }
  function handleButtonClick(){
    setClicked(!clicked)
  }
  
  // function videoId(){
  // const yogaVideoId = id
  // }

  return (
    <>
    <div className="yoga-item" onClick={handleButtonClick}>
      <h2>{title}</h2>
      <img src={image} className="yogaimage"/>
      <h4>{category}</h4>
      <button onClick={handleClick}>{liked ? '❤' : '♡'}</button>
      <p>{description}</p>
    </div>

</>
)
}
