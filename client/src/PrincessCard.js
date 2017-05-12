import React from 'react';

class PrincessCard extends React.Component {

  state = {side:'front'};


  toggleCard(side) {
    if(side ==='front') {
      this.setState({side:'back'});
    } else {
      this.setState({side:'front'});
    }

  }
  render() {
    let {princess} = this.props;
    let finalDisplay;
    if (this.state.side === 'front'){
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
      <div onClick={() => {this.toggleCard(this.state.side)}} className='col s4' style={{border:'1px solid black'}}>
      { finalDisplay }
      </div>
    )

  }
}

export default PrincessCard;
