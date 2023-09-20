"use strict";

// Current Date
const currentDate = new Date();

// Input Variables
const dayInput = document.querySelector("#day-input");
const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");

// Calculate Button
const calculateBtn = document.querySelector(".calculate-btn");

// Result Variables
const resultYear = document.querySelector("#result-year");
const resultMonth = document.querySelector("#result-month");
const resultDay = document.querySelector("#result-day");

// Validation

// Validate function on change
function validate(e) {
  const target = e.target;
  const targetValue = target.value;

  // target id is in fact a sibling of err-msg FIX THESE TWO
  const errMsg = target.nextSibling.nextSibling;
  const errMsgId = errMsg.getAttribute("id");
  const emptyMsg = document.querySelector(`#${errMsgId} .empty-msg`);

  // Check if target input is empty
  if (targetValue == "") {
    target.classList.add("invalid");
    emptyMsg.classList.add("visible");
  } else {
    target.classList.remove("invalid");
    emptyMsg.classList.remove("visible");
  }
}

function dmValidation(e) {
  const target = e.target;
  const targetValue = target.value;

  // target id is in fact a sibling of err-msg FIX THESE TWO
  const errMsg = target.nextSibling.nextSibling;
  const errMsgId = errMsg.getAttribute("id");
  const invalidMsg = document.querySelector(`#${errMsgId} .invalid-msg`);

  // Check if target input is empty
  if (errMsgId === "day-msg" && targetValue > 31) {
    target.classList.add("invalid");
    invalidMsg.classList.add("visible");
  } else if (errMsgId === "month-msg" && targetValue > 12) {
    target.classList.add("invalid");
    invalidMsg.classList.add("visible");
    console.log(currentDate.getFullYear());
  } else if (
    errMsgId === "year-msg" &&
    Number(targetValue) > Number(currentDate.getFullYear())
  ) {
    target.classList.add("invalid");
    invalidMsg.classList.add("visible");
  } else {
    target.classList.remove("invalid");
    invalidMsg.classList.remove("visible");
  }
  console.log(errMsgId);
}

// Add Event Listeners To validate
dayInput.addEventListener("change", validate);
monthInput.addEventListener("change", validate);
yearInput.addEventListener("change", validate);

dayInput.addEventListener("change", dmValidation);
monthInput.addEventListener("change", dmValidation);
yearInput.addEventListener("change", dmValidation);

// Calculation function
function calculateAge() {
  let date = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
  const ageDateFormatted = new Date(date);

  // Get difference in milliseconds
  const dateDifferenceInMilliseconds = currentDate - ageDateFormatted;

  // Get results in year, month and day
  let resultYear = Math.floor(dateDifferenceInMilliseconds * 3.171e-11);
  let resultMonth = Math.floor(
    (dateDifferenceInMilliseconds * 3.80517e-10) % 12
  );
  let resultDay = Math.floor((dateDifferenceInMilliseconds * 1.15741e-8) % 36);
  
  // Calendar logic
  if (resultDay > 31) {
    resultMonth += 1;
    resultDay -= 31;
  }
  if (resultMonth > 12) {
    resultYear += 1;
    resultMonth -= 12;
  }
  // Show results to user using show function
  show(resultYear, resultMonth, resultDay);
}

// Put information on placeholders
function show(year, month, day) {
  resultYear.innerText = year;
  resultMonth.innerText = month;
  resultDay.innerText = day;
}

// Add Event Listener to Calculate Age
calculateBtn.addEventListener("click", calculateAge);
