import React, { Component } from 'react';
import YouTube from 'react-youtube';




class Category extends Component {

renderVideos() {
	console.log(this.props.videos.data.data)
	return this.props.videos.data.data.map ((el, i) => {
		console.log(el.snippet.thumbnails.high.url)

		return (
			<div>

			<a href=''><img src={el.snippet.thumbnails.high.url}></img></a>

			</div>
			)
	})


}


	render() {
		return(
				<div>

				{this.renderVideos()}

				</div>

			)
	}
}

export default Category;