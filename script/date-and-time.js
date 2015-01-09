$(document).ready(function() {
	//document.getElementById("time").innerHTML = Date();

	days = new Array("Sun","Mon","Tue","Wed","Thur","Fri","Sat");

	function GetTime() {

		// Get day of the week
		var d = new Date();
		var day = d.getDay();

		// Get current time
		var hour = d.getHours();
		var min = d.getMinutes();
		var ampm;

		// Is it AM or PM?
		if (hour == 0) {
			ampm = " AM";
			hour = 12;
		} 
		else if (hour < 12) {
			ampm = " AM";
		}
		else if (hour == 12) {
			ampm = " PM";
		}
		else if (hour > 12) {
			ampm = " PM";
			hour = hour - 12;
		}

		if (min <= 9) {
			min = "0" + min;
		}

		document.getElementById("time").innerHTML=""+days[day] + " " + hour + ":" + min + ampm;
	}

	window.onload=function() {
		GetTime();
		setInterval(GetTime, 1000);
	}

})