var makeExpandDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="expand-dancer"><img class="sprite" src="./assets/blazer.GIF"></span>');
  this.setPosition(top, left);
};

makeExpandDancer.prototype = Object.create(makeDancer.prototype);
makeExpandDancer.prototype.constructor = makeExpandDancer;

// makeExpandDancer.prototype.oldStep = makeExpandDancer.prototype.step; // why is this not a function?
// makeExpandDancer.prototype.step = function() {
//   //console.log('this is running new step');
//   this.oldStep();
//   this.$node.toggle();
// };