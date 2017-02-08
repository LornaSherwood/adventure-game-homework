var assert = require('assert');
var Rat = require('../rat');
var Food = require('../food');

describe('Rat', function(){
  it('should touch food', function(){
    var rat = new Rat();
    var food = new Food("fries", 10);
    rat.nibbleFood(food);
    assert.equal(true, food.nibbled);
  })



});