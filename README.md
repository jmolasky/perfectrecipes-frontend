# PerfectRecipes

A web application that uses React, MongoDB, Express, Google Firebase, and the Spoontacular API to allow users to save, customize, and search for recipes.

I was inspired to make this application by the common experience of finding a recipe online that looks good, only to have to scroll all the way to the bottom of the page each time I view it just to see the ingredients and instructions.

## Features

Once signed in, a user can add recipes to their account, which are displayed on the home page in clickable card format. Users can view their recipes by clicking the cards, after which there is also the option to either edit or delete the recipe.

An additional feature that I added is a search page, where a user can search for recipes using a free recipe API I found via Spoonacular. Unfortunately, since I am using the free version, the number of API requests per day is limited to ~150. Each search is an API call, and if a user clicks on a card in the search results, a further API call is triggered that fetches the data for that particular recipe.

If a user decides that they want to save the recipe, they can click a button and the recipe will be added to their account. Now they can view it without needing to search.

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

## Future Enhancements/Next Steps

- The addition of categories/tags to the application, which will require modifying the database schema and refactoring routes

- A user dashboard that allows users to make a profile that they can edit
