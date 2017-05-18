
import React from 'react';

class PrincessForm extends React.Component  {
  state={
    princessName:'',
    favRest: {
      restName:'',
      priceRange:'',
      cuisine:'',
      description:'',
      rating:null
    },
    princessReview:'',
    imageURL:''
  }

  onChange = (e) =>{

    let { target: {value, id}} = e;
    this.setState( {[id] : value});
  }

  onChangeSub = (e) => {

      let { target: {value, id}} = e;
      this.setState( {favRest:{...this.state.favRest, [id] : value}});
  }

  submit = (e) =>{
    e.preventDefault();
    let {princessName, favRest,princessReview,imageURL} = this.state;
    let {restName,priceRange,cuisine,description,rating } = favRest;
    let addPrincess = this.props.addPrincess;
    console.log(addPrincess, this.state, this.props);
    fetch('/api/princesses', {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
          ...this.state
        })
      }).then( res => res.json())
        .then( princess => addPrincess(princess))
        .then( () => {this.setState({
          princessName:'',
          favRest: {
            restName:'',
            priceRange:'',
            cuisine:'',
            description:'',
            rating:null
          },
          princessReview:'',
          imageURL:''
        }) })
  }

  render() {
    let {princessName, favRest,princessReview,imageURL} = this.state;
    let {restName,priceRange,cuisine,description,rating } = favRest;

    let {pageSwitch} = this.props;
    return (
      <div>
        <form onSubmit={this.submit}>
          <label htmlFor="princessName">Princess Name</label>
            <input value={princessName} onChange={this.onChange} id="princessName" name="princessName" required/>

          <label htmlFor="restName">Restaurant Name</label>
            <input value={restName} onChange={this.onChangeSub} id="restName" name="restName" required/>

          <label htmlFor="priceRange">Price Range</label>
            <input value={priceRange} onChange={this.onChangeSub} id="priceRange" name="priceRange" required/>

          <label htmlFor="cuisine">Cuisine Type</label>
            <input value={cuisine} onChange={this.onChangeSub} id="cuisine" name="cuisine" required/>

          <label htmlFor="description">Restaurant Description</label>
            <input value={description} onChange={this.onChangeSub} id="description" name="description" required/>

          <label htmlFor="rating">Average Rating</label>
            <input value={rating? rating : ''} onChange={this.onChangeSub} id="rating" name="rating" required/>

          <label htmlFor="princessReview">Princess Review</label>
            <input value={princessReview} onChange={this.onChange} id="princessReview" name="princessReview" required/>

          <label htmlFor="imageURL">Image URL</label>
            <input value={imageURL} onChange={this.onChange} id="imageURL" name="imageURL" required/>

          <button>Add</button>
        </form>
        <button type="button" onClick={()=>pageSwitch(true)}>Back</button>


      </div>


    )
  }

}

export default PrincessForm;
