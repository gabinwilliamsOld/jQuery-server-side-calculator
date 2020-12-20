console.log("Js Ready!");

$(document).ready(handleReady);

function handleReady() {
  console.log("jQuery ready!");

  // Button click listeners!
  $("#addBtn").on("click", handleAdd);
  $("#minusBtn").on("click", handleMinus);
  $("#timesBtn").on("click", handleTimes);
  $("#divideBtn").on("click", handleDivide);
  $("#equalsBtn").on("click", handleEquals);
  $("#clearBtn").on("click", handleClear);

  initialDom();
} // end handleReady

// Global variables
let numberValueOne;
let numberValueTwo;
let operator;

// function to clear inputs
function clearInputBox() {
  $("#numTwoIn").val("");
  $("#numOneIn").val("");
}

// grabs plus if clicked
function handleAdd() {
  operator = "plus";
}
// grabs minus if clicked
function handleMinus() {
  operator = "minus";
}
// grabs times if clicked
function handleTimes() {
  operator = "times";
}
// grabs divide if clicked
function handleDivide() {
  operator = "divide";
}

// makes sure calculator history stays on DOM even after refresh
function initialDom() {
  $.ajax({
    url: "/data",
    type: "GET",
  }).then(function (response) {
    console.log(response);
    // if array is empty, don't run.  This allows me to run in handle ready and not get undefined errors.
    if (response.length <= 0) {
      console.log("Should do nothing");
      return true;
      // loop through array and appends data to the DOM
    } else {
      for (let i = 0; i < response.length; i++) {
        $("#equationHistory").append(
          `<li>${response[i].valueOne} ${response[i].operator} ${response[i].valueTwo} = ${response[i].outcome}</li>`
        );
      } // end for
    } // end else
  }); // end promise
} // end initialDom

// receives data from data after logic functions have run on server and appends data to the DOM
function renderToDom() {
  $.ajax({
    url: "/calculate",
    type: "GET",
  }).then(function (response) {
    console.log(response);

    $("#result").append(`${response[0].outcome}`);
    $("#equationHistory").append(
      `<li>${response[0].valueOne} ${response[0].operator} ${response[0].valueTwo} = ${response[0].outcome}</li>`
    );
    // end for
  });// end promise
}// end renderToDom

// grabs values from input fields runs sendValues, clears inputs and result text
function handleEquals() {
  numberValueOne = Number($("#numOneIn").val());
  numberValueTwo = Number($("#numTwoIn").val());
  console.log("Values to be sent: ", numberValueOne, numberValueTwo, operator);
  sendValues();
  clearInputBox();
  $("#result").text("");
}

// wraps input data and operator in an object and sends it to the server via ajax
function sendValues() {
  let equationObject = {
    valueOne: numberValueOne,
    operator: operator,
    valueTwo: numberValueTwo,
  };
  console.log("In sendValues:", equationObject);

  $.ajax({
    url: "/calculate",
    type: "POST",
    data: equationObject,
  }).then(function (response) {
    console.log(response);
    // runs renderToDom so new data appends to the DOM

    renderToDom();
  });// end promise
} // end sendValues

// C button actions
function handleClear() {
  console.log("In handleClear.  Clicked");
  // clear result: text
  $("#result").text("");
  // clears input box numbers
  clearInputBox();
}
