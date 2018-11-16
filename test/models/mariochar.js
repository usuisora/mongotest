var mongoose = require('mongoose')


//creating scheme of collection/model
var Schema = new mongoose.Schema({
    name: String,
    weight: Number
});

const Mariochar = mongoose.model('mariochar',Schema);//name of coll-n/model , scheme

module.exports = Mariochar//export modell

//var mar = new Mariochar({name: 'sddfsf', weight: 32});
