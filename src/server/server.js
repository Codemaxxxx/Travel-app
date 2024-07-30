const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { getCityDestination } = require("./getCityDes.js")

//Initialise the Middleware
app.use(cors());

port = 8000

app.use(express.json());
app.use(express.static('dist'));

dotenv.config()
const username = process.env.USER

app.get("/", (req, res) => {
    res.render("index.html")
})

app.post("/getCity", async (req, res) => {
    const { city } = req.body
    const Destination = await getCityDestination(city, username)
    
    res.send(Destination)
})


app.listen(8000, () => console.log(`Server running on port: ${port}`))
