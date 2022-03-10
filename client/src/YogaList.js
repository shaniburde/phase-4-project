import React, { useState } from 'react';
import YogaItem from './YogaItem';

export default function YogaList({ yogaData, clicked, setClicked, handleUpdateItem, handleFindVideoData, handleFindId }) {

  const [dataIndex, setDataIndex] = useState(0)

  const yogaItems = [...yogaData]
    .slice(dataIndex, dataIndex + 6)

    .map((yogaPose) => 
    <YogaItem 
      key={yogaPose.id}
      yogaPose={yogaPose}
      handleUpdateItem={handleUpdateItem}
      clicked={clicked}
      setClicked={setClicked}
      handleFindVideoData={handleFindVideoData}
      handleFindId={handleFindId}
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
