const request = require('request')

const geocodeAddress = (address) => {

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address='

  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);
    request({
      url: `${BASE_URL}${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve({body})
      } else {
        reject(error)
      }
    })
  })
}

geocodeAddress('80207')
  .then(res => {
    console.log(JSON.stringify(res, undefined, 2))
  })
  .catch(err => console.log('error', err))
