const axios = require('axios')

const getCityPic = async (name, pixabay_API_key) => {
    //console.log("I am really working")
    const { data } = await axios.get(`https://pixabay.com/api/?key=${pixabay_API_key}&q=${name}&image_type=photo`)

    //console.log(data.hits[0]);
    const image = await data.hits[0] ? await data.hits[0].webformatURL: "https://source.unsplash.com/random/640x480?city,morning,night?sig=1"


    return { image }
}


// webformatURL
module.exports = { getCityPic } 