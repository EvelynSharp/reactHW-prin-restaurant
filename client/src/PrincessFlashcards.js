import React from 'react';
import PrincessCard from './PrincessCard';

const PrincessFlashcards = ({ princesses }) => {
  return(
    <div className="row">
      { princesses.map( p => (<PrincessCard key={p._id} princess={p} side='back' />) )}
    </div>
  )
}



export default PrincessFlashcards;
