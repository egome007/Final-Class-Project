const User = require("../Models/User.js")
//  this is getall route function
module.exports = {
      login: function(req, res) {
      res.send("Hello from get all route")

    },
// this is a newuser route function
      signup: async function(req, res) {
      let user = await User.create(req.body);
      // create a token
      // send a cookie to the front end containing the token
      res.send({user});

      },

      logout: function(req, res) {
      console.log("logout");
  
      }


    }

