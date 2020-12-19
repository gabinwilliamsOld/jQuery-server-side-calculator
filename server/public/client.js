
console.log('Js Ready!');

$(document).ready(handleReady);

function handleReady() {
  console.log('jQuery ready!');

// Button click listeners!
  $('#addBtn').on('click', handleAdd)
  $('#minusBtn').on('click', handleMinus)
  $('#timesBtn').on('click', handleTimes)
  $('#divideBtn').on('click', handleDivide)
  $('#equalsBtn').on('click', handleEquals)
  $('#clearBtn').on('click', handleClear)

}// end handleReady


let numberValueOne;
let numberValueTwo;
let operator;


function clearInputBox() {
$('#numTwoIn').val('');
$('#numOneIn').val('');
}

function handleAdd() {
  
  operator = 'plus';

}

function handleMinus() {
 
  operator = 'minus';
  
}

function handleTimes() {
 
  operator = 'times';

}

function handleDivide() {

  operator = 'divide';
}

function renderToDom() {

  $.ajax({
    url: "/calculate",
    type: "GET",
    
  }).then(function (response) {
    console.log(response);
    console.log(response);
    $('#result').append(`${response[0].outcome}`)
    $('#equationHistory').append(`<li>${response[0].valueOne} ${response[0].operator} ${response[0].valueTwo} = ${response[0].outcome}</li>`);
    // $('#spanThree').text(`Guess: ${response[2].guessThree} was ${response[2].statusThree}`);
    // $('#spanFour').text(`Guess: ${response[3].guessFour} was ${response[3].statusFour}`);
   
  })};


function handleEquals() {
  numberValueOne = Number($('#numOneIn').val());
  numberValueTwo = Number($('#numTwoIn').val());
  console.log('Values to be sent: ', numberValueOne, numberValueTwo, operator);
  sendValues();
  clearInputBox();
}



function sendValues() {
  let equationObject = {
    valueOne: numberValueOne,
    operator: operator,
    valueTwo: numberValueTwo
  }
console.log('In sendValues:', equationObject);

  $.ajax({
    url: "/calculate",
    type: "POST",
    data: equationObject,
  }).then(function (response) {
    console.log(response);
    renderToDom();
  });
}// end sendValues


function handleClear() {
  console.log('In handleClear.  Clicked');
  $('#result').text('');
  clearInputBox();
  $('#addBtn').prop('disabled', false);
  $('#minusBtn').prop('disabled', false);
  $('#timesBtn').prop('disabled', false);
  $('#divideBtn').prop('disabled', false);
}