console.log("JAVASCRIPT");

var formDay = document.getElementById("day");
var formHour = document.getElementById("hour");
var formMinute = document.getElementById("minute");
var formSecond = document.getElementById("second");

function countDay() {
  var day = Number(document.getElementById("day").value);

  hour = day * 24;
  minute = day * 24 * 60;
  second = day * 24 * 60 * 60;

  document.getElementById("hour").value = hour;
  document.getElementById("minute").value = minute;
  document.getElementById("second").value = second;
}

function countHour() {
  var hour = Number(document.getElementById("hour").value);

  day = hour / 24;
  minute = hour * 60;
  second = hour * 60 * 60;

  document.getElementById("day").value = day;
  document.getElementById("minute").value = minute;
  document.getElementById("second").value = second;
}

function countMinute() {
  var minute = Number(document.getElementById("minute").value);

  day = minute / 60 / 24;
  hour = minute / 60;
  second = minute * 60;

  document.getElementById("day").value = day;
  document.getElementById("hour").value = hour;
  document.getElementById("second").value = second;
}

function countSecond() {
  var second = Number(document.getElementById("second").value);

  day = second / 60 / 60 / 24;
  hour = second / 60 / 60;
  minute = second / 60;

  document.getElementById("day").value = day;
  document.getElementById("hour").value = hour;
  document.getElementById("minute").value = minute;
}

formDay.addEventListener("input", countDay);
formHour.addEventListener("input", countHour);
formMinute.addEventListener("input", countMinute);
formSecond.addEventListener("input", countSecond);
