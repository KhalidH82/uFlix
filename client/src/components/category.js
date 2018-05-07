import React, {Component} from 'react'
import "react-alice-carousel/lib/alice-carousel.css"
import AliceCarousel from 'react-alice-carousel';



class Category extends Component {
  renderVideos() {

    if(this.props.isPopular === true) {

    return this.props.videos.data.data.map((el,i) => {
      let link = "https://www.youtube.com/watch?v=" + el.id
      console.log(el)
      return (
          <div key={i}>
            <a href={link}><img alt="" src={el.snippet.thumbnails.high.url} width="320" height="200"></img></a>
            <p>{el.snippet.title}</p>
            {/* <iframe title={i} src={link} /> */}
          </div>
      )
    })

  }

  else {
    return this.props.videos.data.data.map((el,i) => {
      let link = "https://www.youtube.com/watch?v=" + el.id.videoId
      console.log(el)
      return (
          <div key={i}>
            <a href={link}><img alt="" src={el.snippet.thumbnails.high.url} width="320" height="200"></img></a>
            <p>{el.snippet.title}</p>
            {/* <iframe title={i} src={link} /> */}
          </div>
      )
    })
  }

  }


  render() {

    const responsive = {
  0: {
    items: 1
  },
  600: {
    items: 3
  },
  1024: {
    items: 4
  }
}

    return (
      // <Carousel showThumbs={false}>
      //   {this.renderVideos()}
      // </Carousel>
      <AliceCarousel responsive={responsive}>
        {/* <iframe title="a" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
        <iframe title="b" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
        <iframe title="c" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
        <iframe title="d" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
        <iframe title="e" src="https://www.youtube.com/embed/n0F6hSpxaFc" /> */}
        {this.renderVideos()}
      </AliceCarousel>

    )
  }

}

export default Category