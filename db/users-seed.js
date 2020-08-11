require('dotenv').config();

var User = require('../models/Users');

const mongoose = require("mongoose");

const URI =  process.env.MONGODB_URI ? 'process.env.MONGODB_URI' : 'mongodb://localhost/Emarket'
mongoose.connect(URI, {
  useCreateIndex : true,
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(()=>{
  console.log("conected to mongodb");
}).catch(error => {
  console.log("mongo error",error);
})




const users = [
  new User({
        name: 'Hamish',
        lastName: 'Smith',
        email: 'hamish@smith.com',
        dob: '05/09/1999',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
    }), ({
        name: 'Claire',
        lastName: 'Vandenberg',
        email: 'claire@vandenberg.com',
        dob: '29/09/1999',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
  }),
];

let done = 0;
for (var i = 0; i < users.length; i++) {
    users[i].save(function (err, result) {
        done++;
        if (done === users.length) {
            exit();
        }
    });
}
    function exit() {
    mongoose.disconnect();
}