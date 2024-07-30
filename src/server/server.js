const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

//Initialise the Middleware
app.use(cors());

port = 8000

app.use(express.json());

app.get("/", (req, res) => {
    res.render("index.html")
})

app.post("/getCity", (req, res) => {
    console.log("posted");
    const {city, date} = req.body
    console.log(city, date)
})


app.listen(8000, () => console.log(`Server running on port: ${port}`))
