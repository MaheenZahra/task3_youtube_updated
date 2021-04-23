import React from 'react';
import LeftPannelQuickAccess from './LeftPannelQuickAccess'
import PicturesContainer from './PicturesContainer';



const MainSection=()=> {
  
  return (
    <div className="MainSection">
        <LeftPannelQuickAccess/>
        <PicturesContainer/>
      </div>
    
  );
}

export default MainSection;