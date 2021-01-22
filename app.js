const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2];

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}


// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const {label:productLabel, stock, rating = 5} = product
// console.log(label, stock)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product);
