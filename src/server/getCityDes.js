const axios = require('axios')

const getCityDestination = async (city, username) => {
    const { data } = await axios.get(`https://secure.geonames.org/searchJSON?q=${city}&maxRows=1&username=${username}`)
    const { name, lat, lng} = await data.geonames[0]
    console.log({ name, lat, lng })

    return { name, lat, lng };
}

module.exports = { getCityDestination }