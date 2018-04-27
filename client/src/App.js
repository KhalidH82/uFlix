import React, { Component } from 'react';
import Services from 'services';

import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false,
      results: null,
      search: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }


  handleChange(e) {
    // console.log(e)
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      search: value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state)

}






  render() {
    return (
      <div className="App">
          <h1>uFLix</h1>
          <form onSubmit={this.handleSubmit}>
      <input type="text" name="songName" onChange={this.handleChange} placeholder="Search Videos" />
      <input type="submit" value="search" />

      

      </form>
      </div>
    );
  }
}

export default App;
