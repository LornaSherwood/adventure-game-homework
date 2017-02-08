var Hero = function(name, favouriteFood){
  this.name = name,
  this.health = 0,
  this.favouriteFood = favouriteFood

};

Hero.prototype = {
  sayName: function(){ 
    return "My name is " + this.name;
  },
  eat: function(food){
    if (this.favouriteFood === food.name && food.nibbled === false){
      this.health += (food.replenishmentValue * 1.5);
    }
    else if (this.favouriteFood === food.name && food.nibbled === true){
      this.health -= (food.replenishmentValue * 1.5);
    }
    else if (food.nibbled === true){
      this.health -= food.replenishmentValue;
    }
    else {
      this.health += food.replenishmentValue;
    };
  }


};

module.exports = Hero;