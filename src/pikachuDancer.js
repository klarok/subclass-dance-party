var makePikachuDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.customize('pikachu.png', 'pikachu-dancer');
};

makePikachuDancer.prototype = Object.create(makeDancer.prototype);
makePikachuDancer.prototype.constructor = makePikachuDancer;