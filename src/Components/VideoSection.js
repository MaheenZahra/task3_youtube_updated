import React from 'react';
import VideoDescription from './VideoDescription';



const VideoSection=(props)=> {
  
  return (
    <div className="completeSec">
    <div className='thumbnail'>
      <img src={props.image} alt='Food iamge' title="Food Recipe-Healthy Ramazan Recipe" className="imagePart" />
    </div>
    
    <VideoDescription logo={props.logo} title={props.title} Channel={props.Channel}/>
      
    
      </div>
  );
}

export default VideoSection;