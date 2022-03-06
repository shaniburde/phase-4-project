import React, {useState} from 'react'

export default function YogaItem({yogaPose, clicked, setClicked}) {
  const {id, title, image, category, description, favorited} = yogaPose

  const [liked, setLiked] = useState(false)

  function handleClick(){
    setLiked(!liked)
  }
  function handleButtonClick(){
    setClicked(!clicked)
  }
  
  return (
    <div onClick={handleButtonClick}>
      <h2>{title}</h2>
      <img src={image}/>
      <h4>{category}</h4>
      <button onClick={handleClick}>{liked ? '❤' : '♡'}</button>
      <p>{description}</p>
    </div>
  )
}
