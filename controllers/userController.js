const User = require('../models/User');
const Student = require('../models/Student')
const bcrypt = require('bcrypt');


async function addUser(req, res) {
    try {
        console.log(req.body, 'req.body');
        let user = new User(req.body);
        // user.userType ='Admin';
        let encrypedPassward = bcrypt.hashSync(req.body.password, 10);
        console.log(encrypedPassward, 'encryptedpassword');
        user.password = encrypedPassward;
        await user.save();

        console.log("data enter succecsfully");
        res.redirect("/");
    } catch (err) {
        console.log(err)
    }
};


async function doLogin(req, res) {
    try {
        console.log(req.body, 'req.body');
        let user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (user) {
            let validpassword = bcrypt.compare(req.body.password, user.password)
            if (validpassword) {
                if (user.userType === "Admin") {
                    let students = await Student.find({});
                    res.render('welcomeadmin', {
                        students: students       
                    });
                } else{
                    res.render('welcomestudent');
                }
            } else {
                res.send("<h1> invalid user/password");
            }
        } else {
            res.end("<h1> user does not exist");
        }
    } catch (err) {
        console.log(err);
    }
};
module.exports = {
    addUser,
    doLogin,
};
