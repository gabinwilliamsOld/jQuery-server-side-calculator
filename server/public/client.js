
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


// BUTTON FUNCTIONS

function handleAdd() {
  console.log('In handleAdd.  Clicked');
}

function handleMinus() {
  console.log('In handleMinus.  Clicked');
}

function handleTimes() {
  console.log('In handleTimes.  Clicked');
}

function handleDivide() {
  console.log('In handleDivide.  Clicked');
}

function handleEquals() {
  console.log('In handleEquals.  Clicked');
}

function handleClear() {
  console.log('In handleClear.  Clicked');
}