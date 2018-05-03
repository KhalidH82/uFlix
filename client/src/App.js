import React, { Component } from 'react';
import Services from './services';
import Category from './components/category';

import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      search: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
    
  }


  componentDidMount() {
    Services.getHomeData()
    .then(data => {
      console.log(data)
      this.setState({
        apiData: data,
        apiDataLoaded: true
      })

    })
    .catch(err => {
      console.log(err)
    })
    
  }


  handleChange(e) {
    // console.log(e)
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      search: value
    })
  }

  handleFormSubmit(e){
    e.preventDefault();
    console.log(this.state)

}

renderVideos() {
  return (
    
    <Category  videos={this.state.apiData}/>
    
    )
}






  render() {
    return (
      <div className="App">
          <h1>uFLix</h1>
          <form onSubmit={this.handleFormSubmit}>
      <input type="text" name="search" onChange={this.handleChange} placeholder="Search Videos" />
      <input type="submit" value="search" />
      </form>
      {this.state.apiDataLoaded ? this.renderVideos() : <h1>Loading...</h1>}
      </div>
    );
  }
}

export default App;
