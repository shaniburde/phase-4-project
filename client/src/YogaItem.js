import React, {useState} from 'react';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
    // <>
  
    // <div className="yoga-item">
    //   <div onClick={handleButtonClick}>
    //     <h2>{title}</h2>
    //     <img src={image} className="yogaimage"/>
    //     <h4>{category}</h4>
    //     <button onClick={handleClick}>{liked ? '❤' : '♡'}</button>
    //     <p>{description}</p>
    //   </div> 
    // </div>


  // return (
    <Card sx={{ maxWidth: 345 }} className="yoga-item">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="yoga pose image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );


  
// </>
  
}