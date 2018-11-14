

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

makeDancer.prototype.lineUp = function(index, spacing) {
  this.setPosition("70%", (index + 1) * spacing);
  this.$node.addClass("line-up-class");
};

makeDancer.prototype.randomize = function(bodyH, bodyW) {
  this.$node.removeClass("line-up-class");
  var top = bodyH * Math.random();
  var left = bodyW * Math.random();
  this.setPosition(top, left);
};

makeDancer.prototype.customize = function(sprite, cssClass) {
  if (sprite !== null) {
    this.$node.append('<img class = "sprite" src = "./assets/' + sprite + '">');
  }
  this.$node.addClass(cssClass);
};