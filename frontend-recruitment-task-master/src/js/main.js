document.getElementById('button').addEventListener('click',
function(){
document.querySelector('.alert-modal').style.display = 'flex'
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.alert-modal-close'). style.display = "none"
});