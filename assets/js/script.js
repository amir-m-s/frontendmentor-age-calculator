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
  } else if (errMsgId === "month-msg" &&  targetValue > 12) {
    target.classList.add("invalid");
    invalidMsg.classList.add("visible");
    console.log(currentDate.getFullYear());
  } else if (errMsgId === "year-msg" && Number(targetValue) > Number(currentDate.getFullYear())) {
    target.classList.add("invalid");
    invalidMsg.classList.add("visible");
  } else {
    target.classList.remove("invalid");
    invalidMsg.classList.remove("visible");
  }
  console.log(errMsgId);
}


// Add Event Listeners
dayInput.addEventListener("change", validate);
monthInput.addEventListener("change", validate);
yearInput.addEventListener("change", validate);

dayInput.addEventListener("change", dmValidation);
monthInput.addEventListener("change", dmValidation);
yearInput.addEventListener("change", dmValidation);
