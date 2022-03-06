import React, { useState } from 'react';
import Video from './Video';
import YogaList from './YogaList';

export default function Maincontainer({yogaData}) {

const [clicked, setClicked] = useState(false);

  return (
    <div>
    {clicked ? 
    (<Video 
      yogaData={yogaData}
      clicked={clicked} 
      setClicked={setClicked}/>) : 
    (<YogaList 
      yogaData={yogaData} 
      clicked={clicked} 
      setClicked={setClicked}/>)
    }
    </div>
  )
}
