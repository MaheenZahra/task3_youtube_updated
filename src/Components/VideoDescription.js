import React from 'react';


const VideoDescription=(props)=> {
  return (
    <div className="Descr">
      <div>
     <img src={props.logo} alt="logo" className="vidLogo"/>
      <p className='vidText'> 
       {props.title}
      </p>
      </div>
      <p className="channelName">{props.Channel}</p>
      <p className="views">1,359 views•Sep 26, 2020</p>
    </div>
  );
}

export default VideoDescription;