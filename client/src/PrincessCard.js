import React from 'react';

class PrincessCard extends React.Component {

  state = {princess:{}, side:'front'};

  componentDidMount = () => {
    let princess = this.props.princess;
    this.setState({princess});
  }

  toggleCard(side) {
    if(side ==='front') {
      this.setState({side:'back'});
    } else {
      this.setState({side:'front'});
    }

  }

  removeCall = (princess) => {
    let removePrincess = this.props.removePrincess;
    fetch(`/api/princesses/${princess._id}`,{
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'DELETE'
    }).then (res => res.json())
      .then( () => removePrincess(princess) )
  }

  changeReview = (e) => {
    let { target: {value, id}} = e;
    this.setState( {princess:{...this.state.princess, [id]:value}});
  
  }

  submitUpdate = (e) => {
    e.preventDefault();
    let updatedPrincess = this.state.princess;
    let {princess} = this.state;
    let updatePrincessReview = this.props.updatePrincessReview;
    fetch(`/api/princesses/${princess._id}`,{
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({ ...princess })
    }).then (res => res.json())
      .then( () => updatePrincessReview(updatedPrincess) )
  }



  render() {
    let {princess, removePrincess} = this.props;
    let finalDisplay;
    if (this.state.side === 'front'){
      finalDisplay = (
            <div onClick={() => {this.toggleCard(this.state.side)}}>
              <img style={{height:'350px', marginTop: '100px'}} src={princess.imageURL}  />
            </div>
      )
    } else {
      finalDisplay = (
        <div >
          <div style={{ padding:'10px'}}>
            <div onClick={() => {this.toggleCard(this.state.side)}}>
              <h1> {princess.princessName}</h1>
              <h4>{princess.favRest.restName}</h4>
              <h5>{princess.favRest.priceRange}</h5>
              <h5>Rating: {princess.favRest.rating}</h5>
              <h5>Cuisine: {princess.favRest.cuisine}</h5>
              <h6 style={{textAlign:'left' }}>{princess.favRest.description}</h6>
            </div>
            <form onSubmit={this.submitUpdate}>
              <label>Princess Review: </label>
              <input
                  id="princessReview"
                  onChange={this.changeReview}
                  value={this.state.princess.princessReview}
                  style={{textAlign:'left'}}
                />
            </form>
            <button type="button" className="btn pink lighten-3" onClick={() => this.removeCall(princess)}>Delete</button>
          </div>
        </div>
      )
    }

    return(
      <div  className='col s4' style={{border:'1px solid #f5f5f5', height:'550px'}}>
      { finalDisplay }
      </div>
    )

  }
}

export default PrincessCard;
