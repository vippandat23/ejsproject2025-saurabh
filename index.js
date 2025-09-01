const express = require('express');
const path = require('path');
const connect = require('./connection');
const makeAdmin = require('./makeadmin');
const user = require('./routes/user');
// const image = require('./image/logo.jpg');
const student = require('./routes/student');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/image', express.static(path.join(__dirname, 'image')));
app.use(user);
app.use(student);

connect();
makeAdmin();

app.set('view engine', 'ejs');   //ejs is a view engine or express bhi hota ejs ki trha 
app.set('views', path.resolve('./views'));   //if we have to need visit the file ,,path ek module hai 


app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running on 3000");
  }
})