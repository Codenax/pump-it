"use strict";

window.onload = function () {
  currentTime();
};

function currentTime() {
  var date = new Date();
  /* creating object of Date class */

  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var day = weekday[date.getDay()];
  var midday = "AM";
  midday = hour >= 12 ? "PM" : "AM";
  /* assigning AM/PM */

  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  /* assigning hour in 12-hour format */

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("timeNow").innerText = day + " " + hour + ":" + min + " " + midday;
  /* adding time to the div */
  // var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) {
  /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}