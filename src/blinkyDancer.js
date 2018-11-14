var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.customize(null, 'blinky-dancer');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;
makeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};