# PerfectRecipes

## Introduction

A web application that uses React, MongoDB, Express, Google Firebase, and the Spoontacular API to allow users to save, customize, and search for recipes.

I was inspired to make this application by the common experience of finding a recipe online that looks good, only to have to scroll all the way to the bottom of the page each time I view it just to see the ingredients and instructions.

## Features

Once signed in, a user can add recipes to their account by either filling in a form or clicking a button to parse a supported recipe website URL. Please see the list of supported recipe websites in the `recipe-scraper` documentation [here](https://github.com/jadkins89/Recipe-Scraper).

Recipes are displayed on the user's home page in clickable card format. Users can view the full recipes by clicking the cards, after which there is also the option to either edit or delete the recipe.

An additional feature that I added is a search page, where a user can search for recipes using a free recipe API I found via [Spoonacular](https://spoonacular.com/food-api). Unfortunately, since I am using the free version, the number of API requests per day is limited to ~150. Each search is an API call, and if a user clicks on a card in the search results, a further API call is triggered that fetches the data for that particular recipe.

If a user decides that they want to save the recipe from the search, they can click a button and the recipe will be added to their account. Now they can view it without needing to search.

## Technologies Used

- JavaScript
- NodeJS
- Express
- React
- React-Bootstrap
- React-router-dom
- HTML5
- SASS
- MongoDB
- Mongoose
- Google Firebase
- Inline CSS
- Spoonacular API
- immutability-helper
- recipe-scraper
- Localstorage

## Screenshots

![Login page](https://i.imgur.com/83QDQtfl.png)
![Home page](https://i.imgur.com/gRAdiOSl.png)
![Recipe show page](https://i.imgur.com/r88vIaEl.png)
![Edit page](https://i.imgur.com/3XMxBbYl.png)
![Recipe add page](https://i.imgur.com/0JWEjJxl.png)
![Search page](https://i.imgur.com/8LsRnD9l.png)

## Getting Started

[Click here](https://perfect-recipes.netlify.app/) to see the site live!

You can log in with Google, or create an account with an email address and password.

## Unsolved Problems

- The home page takes a while to load sometimes upon login
- I had some issues using SASS in combination with inline styles and react-bootstrap components

## Future Enhancements/Next Steps

- The addition of categories/tags to the application, which will require modifying the database schema and refactoring routes

- A user dashboard that allows users to make a profile that they can edit
