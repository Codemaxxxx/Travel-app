const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { getCityDestination } = require("./getCityDes.js")
const { getWeatherData } = require("./getWeatherData.js")

//Initialise the Middleware
app.use(cors());

port = 8000

app.use(express.json());
app.use(express.static('dist'));

dotenv.config()
const username = process.env.USER
const weather_API_key = process.env.WEATHER_API_KEY

app.get("/", (req, res) => {
    res.render("index.html")
})

app.post("/getCity", async (req, res) => {
    const { city } = req.body
    const Destination = await getCityDestination(city, username)
    
    res.send(Destination)
})

app.post("/getWeatherData", async (req, res) => {
    const {lat, lng, DayRem} = req.body
    const weather = await getWeatherData(lat, lng, DayRem, weather_API_key)
})


app.listen(8000, () => console.log(`Server running on port: ${port}`))
