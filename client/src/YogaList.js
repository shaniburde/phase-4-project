import React from 'react';
import YogaItem from './YogaItem';

export default function YogaList({ yogaData, clicked, setClicked }) {

  const yogaItems = yogaData.map((yogaPose) => 
  <YogaItem 
    key={yogaPose.id}
    yogaPose={yogaPose}
    clicked={clicked}
    setClicked={setClicked}
  />)

  return (
    <div>{yogaItems}</div>
  )
}
