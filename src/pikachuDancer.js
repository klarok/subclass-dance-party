var makePikachuDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="pikachu-dancer"><img class="sprite" src="./assets/pikachu.png"></span>');
  this.setPosition(top, left);
};

makePikachuDancer.prototype = Object.create(makeDancer.prototype);
makePikachuDancer.prototype.constructor = makePikachuDancer;

makePikachuDancer.prototype.oldStep = makePikachuDancer.prototype.step;
makePikachuDancer.prototype.step = function() {
  this.oldStep();
  
};