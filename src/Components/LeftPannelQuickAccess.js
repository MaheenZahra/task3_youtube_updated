import React from 'react';
import { MdHistory, MdHome, MdKeyboardArrowDown, MdPlaylistPlay, MdSubscriptions, MdThumbUp, MdVideoLibrary, MdWatchLater} from 'react-icons/md';
import {FaGripfire} from 'react-icons/fa';

const LeftPannelQuickAccess=(props) =>{
  return (
    <div className="leftPanel">
            <div className="Home h">
            <MdHome className="IconHome"/>
            <h6 >Home</h6>
            </div>
            <div className="Explore">
            <FaGripfire/>
            <h6 >Explore</h6>
            </div>
            <div className="Subscribtions">
            <MdSubscriptions/>
            <h6 >Subscriptions</h6>
            </div>
            <div className="Library">
            <MdVideoLibrary/>
            <h6 >Library</h6>
            </div>
            <div className="Playlist">
            <MdPlaylistPlay/>
            <h6>Your videos</h6>
            </div>
            <div className="History">
            <MdHistory/>
            <h6>History</h6>
            </div>
            <div className="WatchLater">
            <MdWatchLater/>
            <h6>Watch later</h6>
            </div>
            <div className="Likes">
            <MdThumbUp/>
            <h6>Liked Video</h6>
            </div>
            <div className="showMore">
            <MdKeyboardArrowDown/>
            <h6>Show more</h6> 
            </div>
            
    </div>
  );
}

export default LeftPannelQuickAccess;