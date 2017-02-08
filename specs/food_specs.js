var assert = require('assert');
var Food = require('../food');

describe('Food', function(){

  it('should have name', function(){
    var food = new Food ('anything cuban', 10);
    assert.equal('anything cuban', food.name);
  });

  it('should have replenishment value', function(){
    var food = new Food ('anything cuban', 10);
    assert.equal(10, food.replenishmentValue);
  });

})