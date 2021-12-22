const router = require("express").Router();

const { 
    registerUser 

} = require("./controller");



router.post("/register",  registerUser);


module.exports = router;
