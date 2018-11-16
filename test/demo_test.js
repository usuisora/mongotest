var mocha = require ('mocha')
var assert = require('assert')
//describe tests
describe('this is tests',function(){


    //create test
    it('adding two numbers', function(){
        assert(3+2 === 5)// checking pass or false
    });

})


//to run change test path to mocha
//npm run test