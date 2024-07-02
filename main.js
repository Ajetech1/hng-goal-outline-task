// About tablink Begins here
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Current date, day and time begins here

function updateTimeAndDay() {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getUTCDay()];

  document.getElementById("time").textContent = utcTime;
  document.getElementById("day").textContent = day;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);
