import React, {useState} from 'react';
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

export default function YogaItem({id, title, image, category, description, favorited, clicked, setClicked, findVideo}) {
  

  const [liked, setLiked] = useState(false)

  function handleClick(){
    setLiked(!liked)
  }
  function handleButtonClick(){
    setClicked(!clicked)
    findVideo(id)
  }
  
  
  // function videoId(){
  // const yogaVideoId = id
  // }

  return (
    // <>
  
    <div className="yoga-item">
      <div onClick={handleButtonClick}>
        <h2>{title}</h2>
        <img src={image} className="yogaimage" alt="yoga pose"/>
        <h4>{category}</h4>
        <p>{description}</p>
      </div> 
      <button onClick={handleClick}>{liked ? '❤' : '♡'}</button>
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