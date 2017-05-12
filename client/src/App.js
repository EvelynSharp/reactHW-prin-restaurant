import React, { Component } from 'react';
import './App.css';
import PrincessFlashcards from './PrincessFlashcards';

class App extends Component {
  state ={ princesses: []}

  componentDidMount() {
  fetch('/api/princesses')
    .then( res => res.json())
    .then( princesses => this.setState({ princesses }) )
  }


  render() {
    return (
      <div className="App">
      <PrincessFlashcards princesses={this.state.princesses}/>


      </div>
    );
  }
}

export default App;
