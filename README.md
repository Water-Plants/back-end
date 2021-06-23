# back-end


User Endpoints

Most of these endpoints require a user to be logged in, logged in users have an authorization token

BASE URL: https://water-my-plants-2021.herokuapp.com/api/auth

GET       -> BASE URL -> returns list of users

POST      -> BASE URL /register -> registers new user in database -> MUST PASS IN "username" and "password"

POST      -> BASE URL /login -> If credentials are met, user is logged in and an authorization token is returned -> MUST PASS IN "username" and "password"

PUT       -> BASE URL /editUser/:id -> If user id is found, changes can be made to a user


Plant Endpoints

BASE URL: https://water-my-plants-2021.herokuapp.com/api/plants

GET       -> BASE URL -> returns list of all plants

GET       -> BASE URL /:id -> returns specific plants for a user if user id is found

POST      -> BASE URL /newPlant -> adds a new plant to the database -> MUST PASS IN "nickname", "frequency", and "species"

PUT       -> BASE URL /editPlant/:id -> edits specified plant

DELETE    -> BASE URL /deletePlant/:id -> removes selected plant from database
