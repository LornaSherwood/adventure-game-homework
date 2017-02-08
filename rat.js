var Rat = function() {

};

Rat.prototype = {
  nibbleFood: function(food){
    food.nibbled = true;
  } 
}



module.exports = Rat;