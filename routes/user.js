const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

//http://localhost:3000
router.get('/', (req, res) => {
    res.render('home');
});
router.get('/user/signup', (req, res) => {
    res.render('signup');
});
router.post("/add/user", (req, res) => {
    userController.addUser(req, res);
});
router.post("/login", (req, res) => {
    userController.doLogin(req, res);
});
router.get('/student/add/page',(req,res)=>{
    res.render('addstudent');
});
module.exports = router;