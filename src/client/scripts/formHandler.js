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
    console.log(DayRem)
    
    //const weather = getWeatherData(lng, lat, DayRem)
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
    console.log(timeDifference)
}

export { formHandler }