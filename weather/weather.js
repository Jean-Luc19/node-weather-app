const request = require('request');

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/620d098c7e12b72c8551e2f863cfeca2/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  })

}

module.exports = { getWeather }
