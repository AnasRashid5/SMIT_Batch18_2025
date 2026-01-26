function updateClock() {
    var dateObj = new Date();
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var seconds = dateObj.getSeconds();
    var day = dateObj.getDay();

    var showHours = document.getElementById("hours");
    var showMinutes = document.getElementById("minutes");
    var showSeconds = document.getElementById("seconds");
    var showPeriod = document.getElementById("period");
    var showDate = document.getElementById("date");
    var showMonth = document.getElementById("month");
    var showDay = document.getElementById("day");
    var showYear = document.getElementById("year");

    var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    showDay.textContent = days[day];

    var dateString = dateObj.toString();
    var dateArr = dateString.split(" ");

    showDate.innerText = dateArr[2] + ",";
    showMonth.innerText = dateArr[1];
    showYear.innerText = dateArr[3];
    console.log(hours);
    console.log(minutes);
    console.log(day);
    

    var period = "AM";

    if (hours > 12) {
        hours = hours - 12;
        period = "PM";
    } else if (hours == 0) {
        hours = 12;
        period = "AM";
    } else if (hours == 12) {
        period = "PM";
    }

    if (hours < 10) {
        showHours.innerText = "0" + hours;
    } else {
        showHours.innerText = hours;
    }

    if (minutes < 10) {
        showMinutes.innerText = "0" + minutes;
    } else {
        showMinutes.innerText = minutes;
    }

    if (seconds < 10) {
        showSeconds.innerText = "0" + seconds;
    } else {
        showSeconds.innerText = seconds;
    }

    showPeriod.innerText = period;
}

updateClock();
setInterval(updateClock, 1000);