import React, {useState} from 'react';

export default function YogaItem({ yogaPose, handleUpdateItem, clicked, setClicked, handleFindVideo }) {

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
    setClicked(!clicked)
    handleFindVideo(yogaPose.video)
  }
  

  return (
    // <>
  
    <div className="yoga-item">
      <div onClick={handleItemClick}>
        <h2>{title}</h2>
        <img src={image} className="yogaimage" alt="yoga pose"/>
        <h4>{category}</h4>
        <p>{description}</p>
      </div> 
      <button className="like-button" onClick={handleClick}>{isFavorited ? '❤' : '♡'}</button>
    </div>


  // return (
    // <Card sx={{ maxWidth: 345 }} className="yoga-item" onClick={handleButtonClick}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="140"
    //       image={image}
    //       alt="yoga pose image"
    //       className="yogaimage"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {title} 
    //       </Typography>
    //       <Typography gutterBottom variant="h6" component="div">
    //         ({category})
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {description}
    //       </Typography>
    //       
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
  );


  
// </>
  
}