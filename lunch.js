let display = document.querySelector(".wrap");
var countDownDay = new Date("Jan 20, 2021  14:55:00").getTime();
showDate = () => {
  var currentDay = new Date().getTime();
  var range = countDownDay - currentDay;
  var days = Math.floor(range / (1000 * 60 * 60 * 24));
  var hr = Math.floor((range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((range % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hr;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
};
setInterval(showDate, 1000);
