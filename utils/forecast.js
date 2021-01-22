const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=56afca3b3603626dcd4df4212846ca49&query=${latitude},${longitude}&units=f`;

    request({ url: url, json: true }, (error, response ) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find forecast. Try another search.', undefined)
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degress out. There is a ${response.body.current.precip} chance of rain`);
        }
    })
}

module.exports = forecast