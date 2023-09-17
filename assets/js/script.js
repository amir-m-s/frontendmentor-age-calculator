"use strict";

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

function validate(e) {
  const target = e.target;
  const targetValue = target.value;
  const targetId = target.id;

  // target id is in fact a sibling of err-msg FIX THESE TWO
  const errMsg = target.nextSibling.nextSibling;
  const errMsgId = errMsg.getAttribute("id");
  const emptyMsg = document.querySelector(`#${errMsgId} .empty-msg`);
  const invalidMsg = document.querySelector(`#${errMsgId} .invalid-msg`);

  // Check if target input is empty
  if (targetValue == "") {
    if (!target.classList.contains("invalid")) {
      target.classList.add("invalid");
      emptyMsg.classList.add("visible");
    }
  } else {
    target.classList.remove("invalid");
    emptyMsg.classList.remove("visible");
  }
}

dayInput.addEventListener("change", validate);
monthInput.addEventListener("change", validate);
yearInput.addEventListener("change", validate);
