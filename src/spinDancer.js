var makeSpinDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="carlton-dancer"><img src="http://mrwgifs.com/wp-content/uploads/2014/11/HQ-Carlton-Dance-With-a-Transparent-Background-Gif-From-The-Fresh-Prince-Of-Bel-Air.gif"></span>');
  
  this.$node = $('<span class="spin-dancer"><img class="sprite" src="./assets/carlton2.gif"></span>');
  this.setPosition(top, left);
  
};

makeSpinDancer.prototype = Object.create(makeDancer.prototype);
makeSpinDancer.prototype.constructor = makeSpinDancer;

makeSpinDancer.prototype.oldStep = makeSpinDancer.prototype.step;
makeSpinDancer.prototype.step = function() {
  this.oldStep();
  //this.$node.toggle();
};