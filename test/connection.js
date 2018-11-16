var mongoose = require('mongoose')

//connect to db
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',function(){
    console.log('Connection was made ,now firework!')
}).on('error',error=>console.log("it is error occurred ",error))