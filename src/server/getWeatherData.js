const axios = require('axios')


const getWeatherData = async (lat, lng, DayRem, weather_API_key) => {
    if(!DayRem) {
        const errorMsg = {
            message: "Date is in the past",
            error: true
        }

        return errorMsg
    }
    console.log("working!!")

    if(DayRem < 0) {
        const errorMsg = {
            message: "Date is in the past",
            error: true
        }

        return errorMsg
    }
    if(DayRem > 0 && DayRem <= 7) {
        const { data } = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&units=M&key=${weather_API_key}`)
        const {weather, temp} = data.data[0]
        const {description} = weather

        const weather_data = {description, temp}

        return weather_data

    }else if (DayRem > 7 ) {
        const { data } = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&units=M&days=${DayRem}&key=${weather_API_key}`)
        
        const { weather, temp, app_max_temp, app_min_temp} = data.data[data.data.length - 1]
        const { description } = weather

        const weather_data = {description, temp, app_max_temp, app_min_temp}

        return weather_data
    }

}


module.exports = { getWeatherData }