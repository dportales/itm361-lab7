function init(){
//add your javascrip between these two lines of code
	var in = document.getElementById();
	var button = document.getElementById();
	var out = document.getElementById();
	button.addEventListener('click' , function(){
		out.innerHTML = in.value;
		alert("David Portales: " + in.value)
	)};
}
window.addEventListener('load', init);