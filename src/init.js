$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var height = $("body").height() * Math.random();
    var width = $("body").width() * Math.random();

    
    if (dancerMakerFunctionName === 'makeInteractiveDancer') {
      var prevDancer = window.dancers[window.dancers.length - 1];
      console.log(prevDancer);
      console.log(prevDancer.$node.offset());
      height = prevDancer.$node.offset().top;
      width = prevDancer.$node.offset().left;
      console.log(height + ', ' + width);
    }
    
    var dancer = new dancerMakerFunction(
      height,
      width,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    // produces a mouseover event
    dancer.$node.on('mouseover', function(event) {
      $(this).addClass("spotlight");
      
    });
    
    dancer.$node.on('mouseout', function(event) {
      $(this).removeClass("spotlight");
      
    });
    window.dancers.push(dancer);
  });
  
  $('.lineUpButton').on('click', function(event) {
    var spacing = $("body").width() / (dancers.length + 1);
    window.dancers.forEach((dancer, index) => dancer.lineUp(index, spacing));
  });
  
  $('.randomizeButton').on('click', function(event) {
    window.dancers.forEach((dancer, index) => {
      dancer.randomize($("body").height(), $("body").width());
    });
  });
});

