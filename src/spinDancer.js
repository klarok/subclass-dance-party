var makeSpinDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.customize('carlton2.gif', 'spin-dancer');
};

makeSpinDancer.prototype = Object.create(makeDancer.prototype);
makeSpinDancer.prototype.constructor = makeSpinDancer;