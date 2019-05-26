var currentTime = new Date(); // get the today's date
var hours = currentTime.getHours(); // get the current hour
var minutes = currentTime.getMinutes(); //get the current minutes

// choose meridiem, PM from 12 to 23 and AM from 0 to 11
function chooseMeridiem(hours) {
	if(hours >= 12) {
		return "PM";
	}
	else {
		return "AM";
	}
}

// change PM hours format
function changeHoursFormat(hours) {
	if(hours > 12) {
		hours = hours - 12; // from 13 to 23 will become from 1 to 11
	}
	if(hours < 10) {
		return "0" + hours; // for the hours from 0 to 9 will be added a 0 in front of the number 
	}
	else {
		return hours;
	}
}

function changeMinutesFormat(minutes) {
	if(minutes < 10) { // for the minutes from 0 to 9 will be added a 0 in front of the number 
		return "0" + minutes;
	}
	else {
		return minutes;
	}
}

// make the current time based on hours and minutes and in the end the specific meridiem 
currentTime = changeHoursFormat(hours) + "." + changeMinutesFormat(minutes) + " " + chooseMeridiem(hours);
// show the current time in the html element with the specific id
document.getElementById("currentTime").innerHTML = "Current time: " + currentTime.bold();
