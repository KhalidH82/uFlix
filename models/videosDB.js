// const videosDB = require('../../config/connection');

module.exports = {
  getHome() {
    return db.any('SELECT DISTINCT * FROM song_library ');
  }
}