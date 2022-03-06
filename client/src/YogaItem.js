import React, {useState} from 'react'

export default function YogaItem({yogaPose}) {
  const {title, image, category, description, favorited} = yogaPose

  const [liked, setLiked] = useState(false)

  function handleClick(){
    setLiked(!liked)
  }
  
  return (
    <div>
      <h2>{title}</h2>
      <img src={image}/>
      <h4>{category}</h4>
      <button onClick={handleClick}>{liked ? '❤' : '♡'}</button>
      <p>{description}</p>
    </div>
  )
}
