// create a countdown to September 2, 2023
function countdown() {
  const countDate = new Date('September 2, 2023 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // how does time work?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculate
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // create a countdown that is refreshed every second
    console.log(textDay, textHour, textMinute, textSecond);

    document.getElementById("WeddingDay").innerHTML = "Days: " + " " + textDay;
    document.getElementById("WeddingHours").innerHTML = "Hours: " + " " + textHour;
    document.getElementById("WeddingMinute").innerHTML = "Minutes: " + " " + textMinute;
    document.getElementById("WeddingSecond").innerHTML = "Seconds: " + " " + textSecond;
}

countdown();
setInterval(countdown, 1000);
