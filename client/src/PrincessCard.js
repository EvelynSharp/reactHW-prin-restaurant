import React from 'react';

const PrincessCard = ({ princess, side }) => {
  let finalDisplay;
  if (side === 'front'){
    finalDisplay = (

        <img style={{height:'400px'}} src={princess.imageURL}  />

    )
  } else {
    finalDisplay = (
      <div >
        <h1> {princess.princessName}</h1>
        <h4>{princess.favRest.restName}</h4>
        <h5>{princess.favRest.priceRange}</h5>
        <h5>Rating: {princess.favRest.rating}</h5>
        <h5>Cuisine: {princess.favRest.cuisine}</h5>
        <h6>{princess.favRest.description}</h6>
        <h5>{princess.princessReview}</h5>
      </div>
    )
  }
  return(
    <div className='col s4' style={{border:'1px solid black'}}>
    { finalDisplay }
    </div>
  )
}

export default PrincessCard;
