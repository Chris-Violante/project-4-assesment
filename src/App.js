import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles'


const circles = [1,2,3,4]

class App extends Component {
  state = {
    selected: 1,
  }


  handleSelection = (circleIdx) => {
    this.setState({selected: circleIdx})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            circles={circles}
            selected={this.state.selected}
            handleSelection={this.handleSelection}
            />
          <Circles
           circles={circles}
           selected={this.state.selected}
           />
        </main>
      </div>
    );
  }
}

export default App;
