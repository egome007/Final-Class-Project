const router = require("express").Router();
const {logout, signup, login} = require("../controller/user.js");

router.get("/logout", logout);
router.post("/signup", signup);
router.post("/login", login);
module.exports = router;