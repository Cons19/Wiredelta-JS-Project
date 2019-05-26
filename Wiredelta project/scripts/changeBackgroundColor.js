// function called on the select, dropdown
function changeBackgroundColor() {
	// get the value from the option
	var newBgColor = document.getElementById("newBgColor").value;
	// the page background color change to the new chosen one 
	document.bgColor = newBgColor;
}