var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');


describe('Hero', function(){

  it('should have name', function(){
    var hero = new Hero("Enrique Iglesias","anything cuban");
    assert.equal("Enrique Iglesias", hero.name);
  });

  it('should have health starting at 0', function(){
    var hero = new Hero("Enrique Iglesias","anything cuban");
    assert.equal(0, hero.health);
  });

  it('has a favourite food', function(){
    var hero = new Hero("Enrique Iglesias", "anything cuban");
    assert.equal("anything cuban", hero.favouriteFood);
  })

  it('should say name', function(){
    var hero = new Hero("Enrique Iglesias", "anything cuban");
    assert.equal("My name is Enrique Iglesias", hero.sayName());
  })

  it('should eat food', function(){
    var hero = new Hero("Enrique Iglesias", "anything cuban");
    var food = new Food("fries", 10);
    hero.eat(food);
    assert.equal(10, hero.health);
  })

  it('favourite food boosts replenishment', function(){
    var hero = new Hero("Enrique Iglesias", "anything cuban");
    var food = new Food("anything cuban", 10);
    hero.eat(food);
    assert.equal(15, hero.health);
  })

  it('should reduce replenishment if food nibbled', function(){
    var hero = new Hero("Enrique Iglesias", "anything cuban");
    var food = new Food("fries", 10);
    var rat = new Rat();
    hero.eat(food);
    rat.nibbleFood(food);
    hero.eat(food);
    assert.equal(0 , hero.health); 

  });

  it('should reduce replenishment if food nibbled', function(){
    var hero = new Hero("Enrique Iglesias", "anything cuban");
    var food = new Food("anything cuban", 10);
    var rat = new Rat();
    hero.eat(food);
    rat.nibbleFood(food);
    hero.eat(food);
    assert.equal(0 , hero.health); 

  });


})