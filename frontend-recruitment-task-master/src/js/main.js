let modal = document.getElementById('myAlertModal');
let button = document.getElementById('button')
let div = document.getElementById('closeAlert');
let btn = document.getElementById('reset')
const clickedTimes = document.getElementById('clickedTimes')
let clicked = 0;

button.onclick = function() {
  clicked += 1;
  document.getElementById("clicked").innerHTML = clicked;
  modal.style.display = 'flex'
  if(clicked >= 5) {
    btn.style.display ='block'
  }
}

let reset = function() {
  clicked = 0;
  document.getElementById('clicked').innerHTML = clicked;
}

let resetButton = document.querySelector("#reset");
btn.style.display = 'none';
resetButton.addEventListener("click", function() {
  reset();
  btn.style.display = 'none'
})  

div.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}