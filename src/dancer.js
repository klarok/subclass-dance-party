

var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  
};

makeDancer.prototype.lineUp = function(index, bodyHeight) {
  // change position somehow
  
  //given some index, calculate position in x
  // call setPosition on dancer
  // fix positioning based on bodyHeight
  this.setPosition(index * 50 + 100, 50);
  
  // this does not reset clock
  // our goal is to reset dancing animation clock
  // var animationSetting = {
  //   animation: '1s infinite spin'
  // };
  this.$node.addClass("line-up-class");
  // this.$node.css(animationSetting);
  
};

// write scatter function to redistribute each dancer
makeDancer.prototype.randomize = function(bodyH, bodyW) {
  this.$node.removeClass("line-up-class");
  var top = bodyH * Math.random();
  var left = bodyW * Math.random();
  this.setPosition(top, left);
  // give it back its original animation
  
};