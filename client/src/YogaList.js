import React, { useState } from 'react';
import YogaItem from './YogaItem';

export default function YogaList({ yogaData, clicked, setClicked, handleUpdateItem, handleFindVideoData, handleFindId }) {

  const [dataIndex, setDataIndex] = useState(0)

  const yogaItems = [...yogaData]
    .slice(dataIndex, dataIndex + 3)

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
    setDataIndex((dataIndex) => (dataIndex + 3) % yogaData.length);
  }
  function handleClickLess() {
    setDataIndex((dataIndex) => (dataIndex - 3) % yogaData.length);
  }
  
  return (
    <div className="yoga-list">
      <div className="yoga-container">{yogaItems}</div>
      <div className="float-container">
          <div className="next-container">
                <button 
                className="back-button" 
                onClick={handleClickLess}><i class="gg-chevron-left"></i></button>
          </div>
          <div className="next-container">
              <button 
                className="next-button" 
                onClick={handleClickMore}><i class="gg-chevron-right"></i></button>
            </div>
        </div>
    </div>
    
  )
}
