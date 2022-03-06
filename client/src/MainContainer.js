import React, { useState } from 'react';
import YogaList from './YogaList';

export default function Maincontainer({yogaData}) {

const [clicked, setClicked] = useState(false);

  return (
    <div>
    {clicked ? 
    <Video clicked={clicked} setClicked={setClicked}/> : <YogaList yogaData={yogaData}/>
    }
    </div>
  )
}
