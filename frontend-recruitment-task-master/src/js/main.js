const modal = document.getElementById('myAlertModal');
const button = document.getElementById('button');
const div = document.getElementById('closeAlert');
const btn = document.getElementById('reset');
const span = document.getElementById('clicked')

let clicked = 0;

button.onclick = function() {
  if (localStorage.clicks){
    localStorage.clicks = Number(localStorage.clicks) +1;
  }else {
    localStorage.clicks = 1;
  }
  document.getElementById("clicked").innerHTML = localStorage.clicks;
  modal.style.display = "flex"
  if(localStorage.clicks >=5) {
    btn.style.display = 'block'
  }
}

let reset = function() {
  localStorage.clear();
  document.getElementById('clicked').innerHTML = 0;
}

let resetButton = document.querySelector("#reset");
  btn.style.display = 'none'
  resetButton.addEventListener("click", function(){
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