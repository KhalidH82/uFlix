import React, { Component } from 'react';
import services from './services';
import Category from './components/category';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/navBar';
import DropDown from './components/dropDown';
import Home from './components/home'
import Search from './components/search'
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import {BrowserRouter as Router,Route} from 'react-router-dom'



import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      user_name: '',
      fireRedirect: true,

    }
  }


render(){
    return (
      <Router>
        <div className="App">
          {/* <a href='/login'><button onClick={this.logout.bind(this)}>Logout</button></a> */}
          <Route exact path='/' component={Home} />
          <Route path='/search/:query' component={Search}/>
        </div>
      </Router>
    )
  }
}


export default App;
