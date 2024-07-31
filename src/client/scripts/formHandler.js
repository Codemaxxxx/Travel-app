import axios from "axios"

const form = document.querySelector('form');
const dateInput = document.querySelector("#date");


const formHandler = (e) => {
    e.preventDefault()

    //check if function works
    console.log("I am working fine")

    const Destination = getCity();
    const { name, lng, lat } = Destination


    //Getting User data Input
    const date = dateInput.value
    const DayRem = getDayRem(date)
    
    const weather = getWeatherData(lng, lat, DayRem)
}

const getCity= async () => {
    console.log("function is working in the server");
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
}

export { formHandler }