var modal = document.getElementById('myAlertModal');
var button = document.getElementById('button')
var div = document.getElementById('closeAlert');
var clicked = 0;
button.onclick = function() {
  clicked += 1;
  document.getElementById("clicked").innerHTML = clicked;
  modal.style.display = 'flex'
}

var reset = function() {
  var clicked = 0;
  document.getElementById('clicked').innerHTML = 0;
}
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
  reset();
})
  div.onclick = function() {
	modal.style.display = "none";
  }
  window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = 'none'
	}
  }