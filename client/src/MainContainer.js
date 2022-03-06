import React from 'react';
import YogaList from './YogaList';

export default function Maincontainer({yogaData}) {
  return (
    <div>
    <YogaList yogaData={yogaData}/>
    </div>
  )
}
