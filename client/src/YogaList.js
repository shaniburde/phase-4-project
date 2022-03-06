import React from 'react';
import YogaItem from './YogaItem';

export default function YogaList({ yogaData, clicked, setClicked }) {

  const yogaItems = yogaData.map((yogaPose) => 
  <YogaItem 
    key={yogaPose.id}
    clicked={clicked}
    setClicked={setClicked}
    id={yogaPose.id} 
    title={yogaPose.title} 
    image={yogaPose.image}
    category={yogaPose.category} 
    description={yogaPose.description} 
    favorited={yogaPose.favorited}
    className="yoga-container"
  />)

  
  return (
    <div>{yogaItems}</div>
  )
}
