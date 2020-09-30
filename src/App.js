import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("Constructor Called");
    this.state = {
      clicked : 0,
    }
    this.onDivClicked = this.onDivClicked.bind(this);
  }
  onDivClicked(){
    this.setState( {clicked: this.state.clicked + 1 } );
    console.log("Clicked");
  }

  componentDidMount() {
    console.log('Component did mount called');
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate called")
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('Component Should update called');
      return true;
  }

  componentDidUpdate(prevProps, prevState) {
      console.log('Component did update called');
  }

  render (){
    console.log('Render Called');
    return(
      <div className="App">
        <h1 onClick={this.onDivClicked}> This Header is Clicked {this.state.clicked} times. </h1>
    </div>
    );
  }
}

export default App;
