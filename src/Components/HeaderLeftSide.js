import React from 'react';
import {FaYoutube} from 'react-icons/fa';


const HeaderLeftSide=()=> {
  return (
    <div className="leftHeader">

      <button>
          &#9776;
      </button>
        
      <FaYoutube className="YouTube-react" />
      <div className="YoutubeText">YouTube</div>

    </div>
  );
}

export default HeaderLeftSide;