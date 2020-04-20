function init(){
//add your javascrip between these two lines of code
	var input = document.getElementById(entryinput);
	var button = document.getElementById(entrybutton);
	var output = document.getElementById(textoutput);
	button.addEventListener('click' , function(){
		out.innerHTML = in.value;
		alert("David Portales: " + in.value)
	)};
}
window.addEventListener('load', init);