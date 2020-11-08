<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/DXdS21m.png" alt="Pokebook logo"></a>
</p>

<h3 align="center">Pokémon</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

The pokebook project is a library style MERN CRUD application that uses the pokemon api to present the individual pokemon as classic pokemon cards.
The back end serves user authentication and storage of the users favorite pokemon cards.
The goal of this application is to allow a user to view and collect their favorite pokemon cards, and veiew detailed information about the pokemon
in the individual pokemon profiles. Planned expansion of this application will include search functionality, and user chat abilities.

## 🏁 Getting Started <a name = "getting_started"></a>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Prerequisites

An upgraded version of node is needed to run this application.

Before running, npm install must be ran to install the dependencies

### Installing

Clone the project or download the project.

In the root directory, run npm install,
Then, in the client directory , run npm install once more.

To start the server, you must create a mongodb cluster on your own account
and connect it to the application in a .env file. with the key "MONGO_URI" and the value of the
mongodb uri.

In that same .env file, you must add a json web token secret key/value, where the key is "JWT_SECRET"

To run, you can go back to the base directory, and run `npm run dev` this runs the developement mode front end and back end.

You can also run the front end and back end serparately by running `npm run client` or ` npm run server`

## 🎈 Usage <a name="usage"></a>

Usage is simple, the homepage has 50 presented pokemon cards will api filled data.
They each have a button on top that directs the user to the pokemon profile.

To flip the cards, click anywhere on the back of the cards, and on the stat information on the front of the card.

The user can change the look of the cards pokemon sprite, by clicking it. This toggles the sprite to be 'retro style' or official art.

The pokemon profile include accordians with the more detailed information such as generational sprites, and evolution chains.

On the pokemon profile page, there is a button under the pokemon name that allows the user to add the pokemon the the users
'Card deck' in the user profile. The card deck has a maximum of 25 cards.

In the user profile, the cards in the card deck are flippable as well, and have a delete button and bring the user to the pokemon profile.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJs](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [PokéAPI](https://pokeapi.co/) - Pokémon data api
- [ReactBootstrap] (https://react-bootstrap.github.io/) - Front-End framework

## ✍️ Authors <a name = "authors"></a>

- [@Eli-BH](https://github.com/Eli-BH) - Idea & Initial work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to Brad Traversy for the motivation
- Inspiration r/reactjs for the idea flow
