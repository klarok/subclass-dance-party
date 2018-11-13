var makeOrbitDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="orbit-dancer"><img class="sprite" src="./assets/bodysuit.gif"></span>');
  this.setPosition(top, left);
};

makeOrbitDancer.prototype = Object.create(makeDancer.prototype);
makeOrbitDancer.prototype.constructor = makeOrbitDancer;

makeOrbitDancer.prototype.oldStep = makeOrbitDancer.prototype.step;
makeOrbitDancer.prototype.step = function() {
  this.oldStep();

};