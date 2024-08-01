const axios = require('axios')

const getCityDestination = async (city, username) => {
    const { data } = await axios.get(`https://secure.geonames.org/searchJSON?q=${city}&maxRows=1&username=${username}`)

    if(!data.geonames.length) {
        const errorMsg = {
            message: "Couldnt find city. Please enter a valid city name",
            error: true
        }

        return errorMsg
    }
    const { name, lat, lng} = await data.geonames[0]

    return { name, lat, lng };
}

module.exports = { getCityDestination }