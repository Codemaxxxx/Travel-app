import axios from "axios"

const form = document.querySelector('form');
const dateInput = document.querySelector("#date");
const cityInput = document.querySelector("#city");
const error = document.querySelector("#error")


const formHandler = async (e) => {
    e.preventDefault();

    //Validating Inputs

    if(!validInput()) {
        return
    }

    //check if function works
    console.log("I am working fine")

    const Destination = await getCity();
    const { name, lng, lat } = Destination


    //Getting User data Input
    const date = dateInput.value
    const DayRem = getDayRem(date)
    
    const weather =  await getWeatherData(lng, lat, DayRem)
    console.log(weather)

    const { image } = await getCityPic(name)

    uddateUI(DayRem, name, image, weather)
}

const getCity= async () => {
    const { data } = await axios.post("http://localhost:8000/getCity", form, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log(data);
    return data
}

const getDayRem = (date) => {
    //setting the start and end Date
    const presentDate = new Date()
    const futureDate = new Date(date)

    const timeDifference = futureDate.getTime() - presentDate.getTime()

    const DayRem = Math.ceil(timeDifference / (1000 * 3600 *24))
    
    
    return DayRem
}

const getWeatherData = async (lng, lat, DayRem ) => {
    const { data } = await axios.post("http://localhost:8000/getWeatherData", {
        lng,
        lat,
        DayRem
    });

    return data
}

const getCityPic = async (name) => {
    const { data } = await axios.post("http://localhost:8000/getPic", {
        name
    });

    console.log(data)
    return data
}


const uddateUI = (DayRem, city, pic, weather) => {
    document.querySelector("#days-rem").innerHTML = `Your Trip starts in ${DayRem} days from now`;
    document.querySelector(".city-name").innerHTML = `Desired Destination is ${city}`;
    document.querySelector(".weather").innerHTML = DayRem > 7 ? `Weather is ${weather.description}` : `Weather is expected to be ${weather.description}`;
    document.querySelector(".temp").innerHTML = DayRem > 7 ? `Weather Forecast: ${weather.temp}&degC` : `Temperature: ${weather.temp}&degC`;
    document.querySelector(".max-temp").innerHTML = DayRem > 7 ? `High Temperature Forecast: ${weather.app_max_temp}&degC` : "";
    document.querySelector(".min-temp").innerHTML = DayRem > 7 ? `Low Temperature Forecast: ${weather.app_min_temp}&degC` : "";
    document.querySelector(".location-image").innerHTML = `<image src = "${pic}" alt = "image describes the city landscape" width = "100px">`;
    document.querySelector(".image").innerHTML = `<image src = "${pic}" alt = "image describes the city landscape">`;
    document.querySelector(".destination-data").style.display = "block"
    
}

//Validating Inputs

const validInput = () => {
    if(!cityInput.value) {
        error.innerHTML = "Please enter a valid Destination"
        error.style.display = "block";
        return;

    }

    return true
}

export { formHandler }