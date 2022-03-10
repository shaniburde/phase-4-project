import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function YogaItem({ yogaPose, handleUpdateItem, clicked, setClicked, handleFindVideo, handleFindId }) {

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
    handleFindVideo(yogaPose.video)
    handleFindId(id)
  }
  

  return (
    <div className="yoga-item">
      <div>
        <h2>{title}</h2>
        <img src={image} className="yogaimage" alt="yoga pose"/>
        <h4>{category}</h4>
        <p>{description}</p>
      </div> 
      <button className="like-button" onClick={handleClick}>{isFavorited ? '❤' : '♡'}</button>
      <Link exact to="/video" onClick={handleItemClick} >See More</Link>
    </div>
  );
}