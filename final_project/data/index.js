  const videos = require("./videos");
  const users = require('./users');
  const jwtauth = require('./jwtauth');
  const locations = require('./locations');

  module.exports = {
      videos: videos,
      users: users,
      locations:locations,
      jwtauth: jwtauth
  };
