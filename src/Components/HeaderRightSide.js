import React from 'react';
import { MdVideoCall, MdViewComfy} from 'react-icons/md';
import {AiTwotoneBell} from 'react-icons/ai';

const HeaderRightSide=(props)=> {
  return (
    <div className="rightHeader">
      <div className="icons">
          <MdVideoCall className="icon"/>
          <MdViewComfy className="icon"/>
          <AiTwotoneBell className="icon"/>
      </div>
      <img src={props.logo} className="user_profile_pic" alt="user_profile_pic"/>
    </div>
  );
}

export default HeaderRightSide;