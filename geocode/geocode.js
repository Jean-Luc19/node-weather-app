const request = require('request');
const geocodeAddress = (address, callback) => {

  const encodedAddress = encodeURIComponent(address);

  const cb = (error, response, body) => {
    if (error) {
      callback(`Unable to connect to google servers.`);
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  }

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, cb);

}

module.exports = { geocodeAddress };

//620d098c7e12b72c8551e2f863cfeca2
