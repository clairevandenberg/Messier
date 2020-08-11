require('dotenv').config();

var Journal = require('../models/journal');

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


const journal = [
  new Journal({
        title: 'Beach Day',
        content: 'Today i went to the beach and had a great day',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        title: 'Flowers',
        content: 'I am feeling very happy today because it was sunny and I bought myself flowers',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        title: 'Hot Choc and Rain',
            content: 'Today rained and it was depressing but I made hot chocolate and watched movies which made me happy and relaxed',
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