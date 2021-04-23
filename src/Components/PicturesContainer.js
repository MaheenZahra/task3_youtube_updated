import React from 'react';
import SuggestionMenu from './SuggestionMenu';
import VideoSection from './VideoSection';
import Food1 from '../assets/Food1.jpg';
import naat2 from '../assets/naat2.jpg';
import javascript3 from '../assets/javascript3.png';
import Food4 from '../assets/Food4.jpg';
import drama5 from '../assets/drama5.jpg';
import naat6 from '../assets/naat6.jpg';
import Food7 from '../assets/Food7.jpg';
import Uet8 from '../assets/Uet8.png';
import Food9 from '../assets/Food9.jpg';
import Cartoon10 from '../assets/Cartoon10.jpg';
import frontend11 from '../assets/frontend11.jpg';
import ramadan12 from '../assets/ramadan12.jpg';
import logo1 from '../assets/logo1.jpg';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.jpg';
import logo4 from '../assets/logo4.png';

const PicturesContainer=()=> {
  const suggestionsList=['All','snacks','JavaScript','Food','Sass','Naat','Pakistani Dramas','Ramzan','Suno Chanda','Databases','Icecreams'];
  const Thumbnails=[{
                  id:1,
                  thumbnail:Food1,
                  logo:logo2,
                  title:`Reshmi Chicken Paratha Roll Recipe By Food Fusion`,
                  Channel:'Food Fusion'
                },
               {
                id:2,
                thumbnail:naat2,
                logo:logo4,
                title:`Mera dil bhi chmka de Naat Ahmed Raza Qadri`,
                Channel:'Naat Naat'                 
                }, 
               {
                id:3,
                thumbnail:javascript3,
                logo:logo3,
                title:'Learn JavaScript in 2021! || Web Development Course',
                Channel:'CodeLab'
                }, 
               {
                id:4,
                thumbnail:Food4,
                logo:logo2,
                title:'Tastiest Burger ever || Hot Zinger Burger ',
                Channel:'Food Fusion'
              }, 
               {id:5,
                thumbnail:drama5,
                logo:logo4,
                title:' Suno chanda Episode 33 || Season 3 ',
                Channel:'Hum TeleVision'
              },
                { 
                  id:6,
                  thumbnail:naat6,
                  logo:logo3,
                  title: 'Hafiz Tahir Qadri || Latest Naats Mashup 2020',
                  Channel:'Qadri Productions Official'
                }, 
                {
                  id:7,
                  thumbnail:Food7,
                  logo:logo2,
                  title:' Chinese Chicken Vegetable Chowmen Mix',
                  Channel:'Food Fusion'
                },
                 {
                  id:8,
                  thumbnail:Uet8,
                  logo:logo1,
                  title:'University of Engineering and Technology, Taxila',
                  Channel:'Explore Uet'
                },
                {
                  id:9,
                  thumbnail:Food9,
                  logo:logo2,
                  title:'How to make chocolate Ice cream at home',
                  Channel:'Food Fusion'
                }, 
                 {id:10,
                  thumbnail:Cartoon10,
                  logo:logo4,
                  title:' Courage the Cowardly Dog Episode 3 ',
                  Channel:'Cartoon Network'
                },
                  { 
                    id:11,
                    thumbnail:frontend11,
                    logo:logo4,
                    title: 'Front End Web Development Technologies',
                    Channel:'TechPakistan'
                  }, 
                  {
                    id:12,
                    thumbnail:ramadan12,
                    logo:logo1,
                    title:' 12 Things to follow in Ramadan',
                    Channel:'Islamic media'
                  }];

  return (
    <div class="picsContainer">
      <div className="menu">
        { suggestionsList.map(item =>
        <SuggestionMenu suggestion={item} />)}
      </div>
      <div className="pictures">
        {Thumbnails.map((Thumbnail) =>
          < VideoSection image={Thumbnail.thumbnail} logo={Thumbnail.logo} title={Thumbnail.title} Channel={Thumbnail.Channel}/>)} 
      </div>
    </div>
);

}

export default PicturesContainer;