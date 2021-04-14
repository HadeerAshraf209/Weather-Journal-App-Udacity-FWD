/* Global Variables */
//API key
const apiKey = `&appid=c0598cb1472f17e26bab64a224aa984e&units=imperial`;
const fullURL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
let date = new Date();


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();


//get the zip code from the entry when clicking on generate buttom
const generateZipCode = document.getElementById('generate');

//define callback function
const weatherData = async () => {
    //creating variable for entered zip code and feeling
    const zipCode = document.getElementById('zip').value;
    if(!zipCode) {
        alert("Enter a Zip Code!");
        return;
    }
    const feelings = document.getElementById('feelings').value;

    addWeatherData(fullURL, zipCode, apiKey)
    .then((data) => {
        console.log(data);
        postData('/addWeather', {
            temp: data.main.temp, 
            date: newDate, 
            content: feelings,
        }); updateUI();
    })
};

generateZipCode.addEventListener('click', weatherData);


//API key for OpenWeatherMap API
const addWeatherData = async (fullURL, zipCode, apiKey) => {
    const res = await fetch(fullURL+zipCode+apiKey); 
    console.log(res);
    try{
        const data = await res.json();
        return data;

    } catch(error){
        console.log('error' , error);
    }
}



//POST Async
const postData = async (url='', data = {})=>{
    console.log(data);
    const response = await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        // body data type must match "Content-Type" header        
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error){
        console.log("error", error);
    }
};


// GET projectData
const updateUI = async () => {
    const req = await fetch("/all");
    try {
        const projectData =await req.json();
        document.getElementById('date').innerHTML = `Date: ${projectData.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${projectData.temp}`;
        document.getElementById('content').innerHTML = `Feeling: ${projectData.content}`;
    } catch(error) {
        console.log('error', error);
    }
}