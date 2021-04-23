import React from 'react';


const SuggestionMenu=(props)=> {
  return (
    <div class="buttonsList">
        <button type="button" className="SuggestionsButton">
        <span className="buttonText">{props.suggestion}</span></button>
        
    </div>
  );
}



export default SuggestionMenu;