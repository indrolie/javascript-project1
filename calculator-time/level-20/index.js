console.log("JAVASCRIPT");

const textBoxDay = document.getElementById("day");
const textBoxHour = document.getElementById("hour");
const textBoxMinute = document.getElementById("minute");
const textBoxSecond = document.getElementById("second");

function countDay() {
  const day = Number(textBoxDay.value);

  const hour = day * 24;
  const minute = day * 24 * 60;
  const second = day * 24 * 60 * 60;

  textBoxHour.value = hour;
  textBoxMinute.value = minute;
  textBoxSecond.value = second;
}

function countHour() {
  const hour = Number(textBoxHour.value);

  const day = hour / 24;
  const minute = hour * 60;
  const second = hour * 60 * 60;

  textBoxDay.value = day;
  textBoxMinute.value = minute;
  textBoxSecond.value = second;
}

function countMinute() {
  const minute = Number(textBoxMinute.value);

  const day = minute / 60 / 24;
  const hour = minute / 60;
  const second = minute * 60;

  textBoxDay.value = day;
  textBoxHour.value = hour;
  textBoxSecond.value = second;
}

function countSecond() {
  const second = Number(textBoxSecond.value);

  const day = second / 60 / 60 / 24;
  const hour = second / 60 / 60;
  const minute = second / 60;

  textBoxDay.value = day;
  textBoxHour.value = hour;
  textBoxMinute.value = minute;
}

textBoxDay.addEventListener("input", countDay);
textBoxHour.addEventListener("input", countHour);
textBoxMinute.addEventListener("input", countMinute);
textBoxSecond.addEventListener("input", countSecond);
