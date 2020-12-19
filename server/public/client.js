
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
  console.log('In handleAdd.  Clicked');

  numberValueOne = Number($('#numOneIn').val());
  numberValueTwo = Number($('#numTwoIn').val());
  operator = 'add';
  let result = numberValueOne + numberValueTwo;

  console.log('In handleAdd', result);
  
  $('#minusBtn').prop('disabled', true);
  $('#timesBtn').prop('disabled', true);
  $('#divideBtn').prop('disabled', true);
  return result;
}

function handleMinus() {
  console.log('In handleMinus.  Clicked');

  numberValueOne = Number($('#numOneIn').val());
  numberValueTwo = Number($('#numTwoIn').val());
  operator = 'minus';
  let result = numberValueOne - numberValueTwo;

  console.log('In handleMinus', result);
  
  $('#addBtn').prop('disabled', true);
  $('#timesBtn').prop('disabled', true);
  $('#divideBtn').prop('disabled', true);
  return result;
}

function handleTimes() {
  console.log('In handleTimes.  Clicked');

  numberValueOne = Number($('#numOneIn').val());
  numberValueTwo = Number($('#numTwoIn').val());
  operator = 'times';
  let result = numberValueOne * numberValueTwo;

  console.log('In handleTimes', result);
  
  $('#minusBtn').prop('disabled', true);
  $('#addBtn').prop('disabled', true);
  $('#divideBtn').prop('disabled', true);
  return result;
}

function handleDivide() {
  console.log('In handleDivide.  Clicked');

  numberValueOne = Number($('#numOneIn').val());
  numberValueTwo = Number($('#numTwoIn').val());
  operator = 'divide';
  let result = numberValueOne / numberValueTwo;

  console.log('In handleDivide', result);
  
  $('#minusBtn').prop('disabled', true);
  $('#timesBtn').prop('disabled', true);
  $('#addBtn').prop('disabled', true);
  return result;
}

function handleEquals() {
  console.log('In handleEquals.  Clicked');
  $('#result').text('');
  

  if(!$('#addBtn').prop('disabled')) {
    console.log('Data from add!!');
    $('#equationHistory').append(`
    <li>${numberValueOne} + ${numberValueTwo} = ${handleAdd()}</li>
  `);
    $('#result').text(handleAdd());

  }else if(!$('#minusBtn').prop('disabled')) {
    console.log('Data from minus');

    $('#equationHistory').append(`
    <li>${numberValueOne} - ${numberValueTwo} = ${handleMinus()}</li>
  `);
    $('#result').text(handleMinus());

  }else if(!$('#timesBtn').prop('disabled')) {
    console.log('Data from times');

    $('#equationHistory').append(`
    <li>${numberValueOne} * ${numberValueTwo} = ${handleTimes()}</li>
  `);
    $('#result').text(handleTimes());

  }else if(!$('#divideBtn').prop('disabled')) {
    console.log('Data from divide');

    $('#equationHistory').append(`
    <li>${numberValueOne} / ${numberValueTwo} = ${handleDivide()}</li>
  `);
    $('#result').text(handleDivide());

  }else {
    console.log('HandleEquals isnt working right');
  }
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