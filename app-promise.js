
const yargs = require('yargs');
const axios = require('axios');

// const geocode = require('./geocode/geocode');
// const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedAddress = encodeURIComponent(argv.address);
const BASE_MAPS_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const BASE_WEATHER_ADDRESS = 'https://api.darksky.net/forecast/620d098c7e12b72c8551e2f863cfeca2/'

axios.get(`${BASE_MAPS_URL}${encodedAddress}`)
  .then(response => {
    if(response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address')
    }
    const { lat, lng } =
     response.data.results[0].geometry.location;
     console.log(response.data.results[0].formatted_address)
    return axios.get(`${BASE_WEATHER_ADDRESS}${lat},${lng}`);
  })
  .then(response => {
    const { temperature, apparentTemperature } = response.data.currently;
    console.log(`The current temp is ${temperature}, it feels like ${apparentTemperature}`)
  })
  .catch((e) => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect ot API servers.');
    } else {
      console.log(e.message);
    }
  })
