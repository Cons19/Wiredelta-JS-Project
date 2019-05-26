var currentDate = new Date(); // get the today's date
var day = currentDate.getDate(); // get the day of the month
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];
var year = currentDate.getFullYear(); // get the current year

function daysEnding(day) {
	if(day > 3 && day < 21) {
		return "th"; // add the "th" ending for the days between 3 and 21
	}
	if(day % 10 == 1 && day != 11) {
		return "st"; // add the "st" ending for the days that ends with 1 except for 11
	} else if(day % 10 == 2  && day != 12) {
		return "nd"; // add the "nd" ending for the days that ends with 2 except for 12
	} else if(day % 10 == 3  && day != 13) {
		return "rd"; // add the "rd" ending for the days that ends with 3 except for 13
	}
	if(day > 23 && day < 31) {
		return "th"; // add the "th" ending for the days between 23 and 31
	}
}
// make the current date starting with the weekday, then with day number and with the specific ending, and finishing with the month and the year
currentDate = weekdays[currentDate.getDay()] + " " + day + daysEnding(day) + " " + months[currentDate.getMonth()] + " " + year
// show the current date in the html element with the specific id
document.getElementById("todayDate").innerHTML = "Today is " + currentDate.bold(); 
