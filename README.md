## Description
This homepage is made as a stundentproject to learn how to utilize javascript. It has a search engine that lets a user to look up actors or movies. On this page it is also possible to sort by name/title or popularity. There is also two pages, one that lists top rated and one that lists popular movies. A game is included in this home page that gives a user a clue of a movie and lets the user guess a movie out of four possible choices. 
The API used are from:https://www.themoviedb.org/

# The Movie DataBase
The project is structured so that every html page has it's own script. 

Fragments -   pieces of html code that is reused in every html page in this case the navbar. 

We have one class included to include some OOP currently it doesn't do anything except for converting a movie to an object. 

Then there are modules. 

API.js - includes all calls to the The Movie DataBase API. 
game.js - includes all the function required to run the game that is included in the homepage. render.js - includes everything that involves html-tags whenever a new tag is generated and attached to the body. GUI elements are generated here such as tables for listing movies/actors, gmae pictures, Error message. Fetching navbar from fragments are also found here.
sorter.js - includes all the functins to sort everything by name/title or popularity. 

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)



## Installation
No installation is required. Just clone the repositiory and run the index.html file. 

## Usage
Type in a person or a movie in search engine on homepage to search for a movie or person. Sort by clicking on header name/title or popularity. On the navbar you can find top movies and popular movies. There is also a game included just press play again to start the game. 