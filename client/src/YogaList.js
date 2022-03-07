import React, { useState } from 'react';
import YogaItem from './YogaItem';

export default function YogaList({ yogaData, clicked, setClicked, findVideo }) {

  const [dataIndex, setDataIndex] = useState(0)

  const yogaItems = [...yogaData]
    .slice(dataIndex, dataIndex + 6)

    .map((yogaPose) => 
    <YogaItem 
      key={yogaPose.id}
      clicked={clicked}
      setClicked={setClicked}
      id={yogaPose.id} 
      title={yogaPose.title} 
      image={yogaPose.image}
      category={yogaPose.category} 
      // description={yogaPose.description} 
      favorited={yogaPose.favorited}
      findVideo={findVideo}
    />
  )

  function handleClickMore() {
    setDataIndex((dataIndex) => (dataIndex + 6) % yogaData.length);
  }
  
  return (
    <div className="yoga-list">
      <div className="yoga-container">{yogaItems}</div>
      <div className="next-container">
          <button 
            className="next-button" 
            onClick={handleClickMore}>➤</button>
      </div>
    </div>
    
  )
}
