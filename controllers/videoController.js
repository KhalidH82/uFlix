const videos = require('../models/videosDB');
const axios = require('axios');
const videoController = {};


videoController.getHome = (req, res) => {
  axios.get("https://www.googleapis.com/youtube/v3/search?q=surfing&maxResults=25&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso")
    .then(videos => {
      console.log(videos.data.items[1].id.videoId)
      let test = []
      for(let i = 0; i < videos.data.items.length; i++)
      {
        test.push(videos.data.items[i])
      }
      res.json({
        data: test
      })
    })
    .catch(err => {
      console.log(err)
    })
}

 module.exports = videoController