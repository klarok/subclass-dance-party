var makeExpandDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.customize('blazer.gif', 'expand-dancer');
};

makeExpandDancer.prototype = Object.create(makeDancer.prototype);
makeExpandDancer.prototype.constructor = makeExpandDancer;