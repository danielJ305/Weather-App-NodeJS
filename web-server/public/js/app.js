console.log('Client side javascript file is loaded!')

const weatherDiv = document.getElementById('weatherDiv')
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch(`http://localhost:3000/weather?search=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            const errorHTML = `<p>${data.error}</p>`
            weatherDiv.innerHTML = errorHTML
        } else {
            const weatherHTML = `
                <p id='location'>Location: ${data.location}.</p>
                <p id='forecast'>Weather: ${data.forecast}.</p>
            `
            weatherDiv.innerHTML = weatherHTML
        }
    })
})

})