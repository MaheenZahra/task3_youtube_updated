import React from 'react';
import logo from '../assets/user_pic.png';
import HeaderLeftSide from './HeaderLeftSide';
import HeaderCenterSearchArea from './HeaderCenterSearchArea';
import HeaderRightSide from './HeaderRightSide';

const Header=()=>{
  return (
    <div className='HeaderSection'>
      <header>
        <HeaderLeftSide/>
        <HeaderCenterSearchArea/>
        <HeaderRightSide logo={logo}/>
      </header>
      </div>
  );
}

export default Header;