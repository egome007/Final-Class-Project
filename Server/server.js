const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const userRoutes = require("./Routes/user")


// database connection a
require("./config/connection.js");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes (this is going to prefix all of our route by using "/users"; however, this will only be used on users becuase we are passing in a second arg "userRoutes")
app.use("/users", userRoutes);
app.listen(PORT, function() {
console.log(`🌎 ==> API server now on port ${PORT}!`);
});
