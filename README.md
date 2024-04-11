# Front-end Developer coding challenge
The goal of this coding challenge is you assess your front end developement skills (UI, Javascript, HTML, and CSS). You may design this layout in anyway you want but please be creative and add styling.

## Instructions
1. Move into the Server directory and run: `NPM INSTALL` and `NPM RUN SERVE`
2. Move into topgolf-app directory and run: `NPM INSTALL`, `NPM START`, and `NPM TEST`

## Requirements
- Use any framework of your choice (React, Vue, etc..)
- The app must run
- The app must have UI (part of this challenge is to see your HTML and CSS skills, so be creative as you want!)
- You should use a CSS preprocessor or postprocessor, when you use CSS
- It must be responsive in any way of your choosing

## Challenge
This will be a page that has a drop down list of top golf locations and the page will display details of a location when selected.

- Start up express server that is set up and available for you to use by running

  `NPM RUN SERVE`
  
- Use any javascirpt or framework you would like to fetch the location data at:

  `localhost:3000/locations`

  *Please note: The server will run on port 3000, you will need to run an additional script to start your app in whatever framework you choose.
  
- Use the response that comes back from this request to populate the drop down list
- When a location is clicked in the dropdown then populate the page with the image, name of venue and any other data you would like. 

## Bonus Points
- Unit tests for Javascript
- Simple state management
- Add some sort of linting for code quality

## Helpful Hints
- Think about code re-use and scalability of the application for future features

We will discuss your implementation for this challenge on the interview so please be prepared to explain your solution and talk about enhancements that could be made in the future.

Good luck, and have fun!
