const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=56afca3b3603626dcd4df4212846ca49&query=${latitude},${longitude}&units=f`;

    request({ url, json: true }, (error, {body} ) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (body.error) {
            callback('Unable to find forecast. Try another search.', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. There is a ${body.current.precip} chance of rain`);
        }
    })
}

module.exports = forecast