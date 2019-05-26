// function called when pressing the Change Title button
function changePageTitle() {
	// get the data from the user input 
	var newTitle = document.getElementById("newTitleName").value;
	// change the title to the new one
	document.title = newTitle;
	// show current page title after the change
	var pageTitle = document.title;
	document.getElementById("showPageTitle").innerHTML = "Page title: " + pageTitle.bold(); 
}
// show the initial page title 
var pageTitle = document.title;
document.getElementById("showPageTitle").innerHTML = "Page title: " + pageTitle.bold(); 