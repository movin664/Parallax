var w = document.getElementById('wrapper');
var button = document.getElementById('randomize');
var feedback = w.children; // inner elements, your quotes divs

// a function to hide all divs
var hideDivs = function(divs) {
  for (var div of divs) {
    div.style.display = 'none';
  }
}

hideDivs(feedback); // hide all initially

// on click
button.addEventListener('click', function(event) {
  var rnd = Math.floor(Math.random() * feedback.length); // get random index
  hideDivs(feedback); // hide all quotes
  feedback[rnd].style.display = 'block'; // show random quote
})