import React, {Component} from 'react'
import services from '../services'



class Search extends Component {


  constructor(props){
    super(props)
    this.state = {
      apiDataLoaded: false,
      apiData: null
    }
  }

  componentDidMount() {
    services.search(this.props.match.params.query)
      .then(data => {
        console.log("search data", data.data.data[0].snippet.thumbnails.high.url)
        this.setState({
          apiDataLoaded: true,
          apiData: data

        })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {

    console.log("props", this.props.match.params.query)

 if(this.state.apiDataLoaded === true) {

      console.log(this.state.apiData.data)
    return this.state.apiData.data.data.map((el,i) => {
    
      console.log(el)
      return (
          <div key={i}>
     
            <img alt="" src={el.snippet.thumbnails.high.url} width="320" height="200"></img>
            <p>{el.snippet.title}</p>
          
         
          </div>
      )
    }
  )
}

  else {
    return (
        <h1>No Results</h1>
      )
  }
  }

}

export default Search