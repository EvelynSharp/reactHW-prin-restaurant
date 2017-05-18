import React from 'react';
import PrincessCard from './PrincessCard';

const PrincessFlashcards = ({ princesses, removePrincess, updatePrincessReview }) => {

  return(
    <div className="row">
      { princesses.map( p => (<PrincessCard key={p._id} princess={p} removePrincess={removePrincess} updatePrincessReview={updatePrincessReview} princessId={p._id}  />) )}
    </div>
  )
}



export default PrincessFlashcards;
