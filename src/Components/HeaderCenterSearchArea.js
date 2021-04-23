import React from 'react';
import {MdMic, MdSearch} from 'react-icons/md';

const HeaderCenterSearchArea=()=> {
  return (
  
      <div className="Search-area">
          <input type="search" placeholder="Search" className="search-bar" />
          <MdSearch className="search-icon" />
          <MdMic className="Mic-icon" />
      </div>
    
  );
}

export default HeaderCenterSearchArea;