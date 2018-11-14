var makeOrbitDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.customize('bodysuit.gif', 'orbit-dancer');
};

makeOrbitDancer.prototype = Object.create(makeDancer.prototype);
makeOrbitDancer.prototype.constructor = makeOrbitDancer;