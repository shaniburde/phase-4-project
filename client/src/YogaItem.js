import React from 'react';
import { Link } from 'react-router-dom';

export default function YogaItem({ yogaPose, handleUpdateItem, handleFindVideoData }) {

  const { id, title, image, category, description, is_favorited: isFavorited } = yogaPose;



  function handleClick(e) {
    e.preventDefault();

    fetch(`http://localhost:4000/yoga_poses/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_favorited: !isFavorited }),
    })
      .then((r) => r.json())
      .then((updatedItem) => handleUpdateItem(updatedItem))
  }
  
  function handleItemClick(){
    handleFindVideoData(yogaPose)
  }

  const summary = description.substring(0, 50)
  

  return (
    <div className="yoga-item">
      <div>
        <h2>{title}</h2>
        <img src={image} className="yogaimage" alt="yoga pose"/>
        <h4>{category}</h4>
        <p>{summary}...</p>
      </div>
      <Link exact to="/video" onClick={handleItemClick} ><i class="gg-play-button-o"></i></Link>
    </div>
  );
}