import React, { Component } from 'react';
import services from './services';
import Category from './components/category';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/navBar';
import DropDown from './components/dropDown';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';



import './App.css';

class App extends Component {
    
  constructor(props){
    super(props)
    this.state = {
      apiDataLoaded: false,
      apiData: null,
      apiData44: null,
      apiData20: null,
      apiData17: null,
      apiData10: null,
      apiData23: null,
      apiData25: null,
      search: null
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
    
  }


 componentDidMount() {
    services.getHomeData()
    .then(data => {
      this.setState({
        apiData: data,
      })
      services.get44()
      .then(data44 => {
        this.setState({
          apiData44: data44,
        })
        services.get20()
        .then(data20 => {
          this.setState({
            apiData20: data20,
          })
          services.get17()
          .then(data17 => {
            this.setState({
              apiData17: data17,
            })
            services.get10()
            .then(data10 => {
              this.setState({
                apiData10: data10,
              })
              services.get23()
              .then(data23 => {
                this.setState({
                  apiData23: data23
                })
                services.get25()
                .then(data25 => {
                  this.setState({
                    apiData25: data25,
                    apiDataLoaded: true
                  })
                })
                .catch(err => {
                  console.log(err)
                })
              })
              .catch(err => {
                console.log(err)
              })
            })
            .catch(err => {
              console.log(err)
            })
          })
          .catch(err => {
            console.log(err)
          })
        })
        .catch(err => {
          console.log(err)
        })
      })
      .catch(err => {
        console.log(err)
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
      <div>
        <h2> Most Popular </h2>
        <Category videos={this.state.apiData}/>
        <h2> Movie Trailers </h2>
        <Category videos={this.state.apiData44}/>
        <h2> Gaming </h2>
        <Category videos={this.state.apiData20}/>
        <h2> Sports </h2>
        <Category videos={this.state.apiData17}/>
        <h2> Music </h2>
        <Category videos={this.state.apiData10}/>
        <h2> Comedy </h2>
        <Category videos={this.state.apiData23}/>
        <h2> News & Politics </h2>
        <Category videos={this.state.apiData25}/>
      </div>
    )
  }


  render() {
    return (
      <div className="App">
        
          <MuiThemeProvider>
           <NavBar />
           <DropDown />
           </MuiThemeProvider>

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
