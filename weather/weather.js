const request = require('request');

const getWeather = () => {
  request({
    url: `https://api.darksky.net/forecast/620d098c7e12b72c8551e2f863cfeca2/37.8267,-122.4233`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
    } else {
      console.log('Unable to fetch weeather');
    }
  })

}

module.exports = { getWeather }
