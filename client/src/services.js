import axios from 'axios'

class Services {

	search(query) {
		return axios ({
			method: "GET",
			url: `/api/search/${query}`,
		})
	};

	getHomeData() {	
		return axios ({
			method: "GET",
			url: `/api/home`,
		})
	};

	get44() {
    	return axios({
      		method: 'get',
      		url: '/api/44'
    })
  }

  	get20() {
    	return axios({
      		method: 'get',
      		url: '/api/20'
    })
  }

  	get17() {
    	return axios({
      		method: 'get',
      		url: '/api/17'
    })
  }

  	get10() {
   		 return axios({
      		method: 'get',
      		url: '/api/10'
    })
  }

  	get23() {
    	return axios({
      		method: 'get',
      		url: '/api/23'
    })
  }

  	get25() {
    	return axios({
      		method: 'get',
      		url: '/api/25'
    })
  }


};

export default new Services();

