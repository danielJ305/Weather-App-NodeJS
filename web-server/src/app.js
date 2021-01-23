const path = require('path')
const express = require('express')

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Daniel',
        age: 26
    })
})

app.get('/about', (req, res) => {
    res.send([{
            name: 'Daniel'
        },
        {
            name: 'Poseidon'
        }
    ])
})

app.get('/weather', (req, res) => {
    res.send('Weather page')
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})