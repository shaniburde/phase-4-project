import React, {useState} from 'react'

export default function YogaItem({yogaPose}) {
  const {title, image, category, description, favorited, video, comments} = yogaPose

  const [favorited, setFavorited] = useState(false)
  
  return (
    <div>
      <h2>{title}</h2>
      <img src={image}/>
      <h4>{category}</h4>
      
    </div>
  )
}
