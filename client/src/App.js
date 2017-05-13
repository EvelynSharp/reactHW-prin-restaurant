import React, { Component } from 'react';
import './App.css';
import PrincessFlashcards from './PrincessFlashcards';
import PrincessForm from './PrincessForm';

class App extends Component {
  state ={ princesses: [], newPrincess: false}

  componentDidMount() {
  fetch('/api/princesses')
    .then( res => res.json())
    .then( princesses => this.setState({ princesses }) )
  }

  pageSwitch = (newPrincess) => {
    if (newPrincess === true){
      this.setState({newPrincess: false});
    } else {
      this.setState({newPrincess: true});
    }
  }

  addPrincess =(princess) => {
    let {princesses} = this.state;
    this.setState({princesses: [ ...princesses, princess]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.state.newPrincess?
            <PrincessForm addPrincess={this.addPrincess} pageSwitch={this.pageSwitch}/>
          :
            <div>
              <PrincessFlashcards princesses={this.state.princesses}/>
              <button onClick={() => {this.pageSwitch(this.state.newPrincess)}} type="button" style={{marginBottom: '20px'}}>
                New Princess
              </button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
