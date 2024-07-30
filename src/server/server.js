const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

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
})


app.listen(8000, () => console.log(`Server running on port: ${port}`))
