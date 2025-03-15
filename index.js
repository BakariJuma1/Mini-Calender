const monthsName = document.getElementById("monthName");
const daysName = document.getElementById("dayName");
const dayNumber = document.getElementById("dayNumber");
const yearElement = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

monthsName.innerText = date.toLocaleString("en", {
  month: "long",
});

daysName.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dayNumber.innerText = date.getDate();
yearElement.innerText = date.getFullYear();
