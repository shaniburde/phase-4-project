import React from 'react';
import YogaItem from './YogaItem';

export default function YogaList({yogaData}) {

  const yogaItems = yogaData.map((yogaPose) => 
  <YogaItem 
    key={yogaPose.id}
    yogaPose={yogaPose}
  />)

  return (
    <div>{yogaItems}</div>
  )
}
