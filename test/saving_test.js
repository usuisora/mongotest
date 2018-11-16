var mocha = require ('mocha')
var assert = require('assert')
var marioChar =require('./models/mariochar') 
//describe tests
describe('this is tests',function(){


    //create test
    it('saving char', function(done){
     var char = new marioChar({
         name: 'Mario'
     })//create item to model by scheme

     char.save()//saving to model/colle-n from schemma params
     .then(function(){//use then cause SAVE IS ASYNC METHOD
         assert(char.isNew===false)//check whether char was already saved
        
         done()// param of IT scope//fun of mocha// say that TEST IS DONE! 
     })
     
    });

})


//to run change test path to mocha
//npm run test