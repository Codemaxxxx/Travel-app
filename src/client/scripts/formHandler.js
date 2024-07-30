import axios from "axios"

const form = document.querySelector('form');


const formHandler = (e) => {
    e.preventDefault()

    //check if function works
    console.log("I am working fine")

    const Destination = getCity();
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

export { formHandler }