require('dotenv').config();

var MoodTracker = require('../models/moodtracker');

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


const moodTracker = [
  new MoodTracker({
        moodRate: '10',
        didToday: 'Today i went to the beach and had a great day',
        createdAt: new Date(),
        updatedAt: new Date()
    }), ({
        moodRate: '6',
        didToday: 'Today I spent the day studying',
        createdAt: new Date(),
        updatedAt: new Date()
    }), ({
        moodRate: '2',
        didToday: 'Today it was raining so I wacthed movies and hung out with my family',
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