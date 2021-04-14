//1.check node is installed by checking the node -v in the terminal.
//2. Install the cors, bode-parser & express packages (npm install cors body-parser express)

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express= require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;

//Create a server with a callback function. 
// Inside the callback function, log the port number so you can see it is working.
const server = app.listen(port, listening);
//callback function
function listening(){
    console.log(`server is running on localhost: ${port}`);
};

//GET route 
app.get("/all", (req, res) => {
    res.send(projectData);
});

//POST route
app.post('/addWeather', (req, res)=>{
    console.log(req.body);
    newEntry = {
        temp: req.body.temp, 
        date: req.body.date,
        content: req.body.content
    }
    projectData= newEntry;
});


