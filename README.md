# Weather-Journal-App-Udacity-FWD
It requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI in a Weather Journal application.

Using the the starter code: https://github.com/udacity/fend/tree/refresh-2019

Using the project rubic from here: https://review.udacity.com/#!/rubrics/2655/view

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Architecture
website:
styles.css
app.js 
index.html

.gitignore

package-lock.json

README.md

server.js

## Used languages:
- HTML
- CSS
- JavaScript 

## Development Strategy
1. First install Node. Second, Install the packages Express, Body-Parser, and Cors from the terminal and them include them in server.js file.
2. Create a server running on the port. Add a console.log() to the server callback function, and test that the server is running using Node in the terminal to run the file server.js
3. Add a GET route that returns the projectData object in the server code. Then, add a POST route that adds incoming data to projectData.
    The POST route should anticipate receiving three pieces of data from the request body
     * temperature
     * date
     * user response

4. Acquire API credentials from OpenWeatherMap website. Used my credentials and the base url to create global variables at app.js code.
5. Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
6. Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
7. Inside that callback function call  async GET request with the parameters:
    - base url
    - user entered zip code (see input in html with id zip)
    - personal API key
8. makes a POST request to add the API data, as well as data entered by the user
9. Finally, chain another Promise that updates the UI dynamically.
