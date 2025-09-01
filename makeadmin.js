const User = require ('./models/User');
const bcrypt = require('bcrypt');
async function makeAdmin(){
    try {
        let user = await User.findOne({email:'saurabsharma569@gmail.com' });
        if(user){
            console.log("user updated")
        }else{
        user = new User();
        user.firstname = "saurabh";
        user.lastname = "sharma";
        user.email = "saurabsharma569@gmail.com";
        let encrypedPassward = bcrypt.hashSync("12345",10);
        user.password = encrypedPassward;
        user.userType = 'Admin';
        await user.save();
        console.log('user save successfully..........');
        }
        } catch (err) {
        console.log(err);
    }
}
module.exports = makeAdmin; 