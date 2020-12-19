
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

let numberValueOne = 0;
let numberValueTwo = 0;



// INPUT FUNCTIONS

// function handleInputOne() {
//   console.log(numberValueOne);
// }

// function handleInputTwo() {
//   console.log(numberValueTwo);
// }



// BUTTON FUNCTIONS

// function renderToDom() {

//   let numberValueOne = $('#numOneIn').val();
//   let numberValueTwo = $('#numTwoIn').val();

//   if(handleAdd) {
//    let result = numberValueOne + numberValueOne;
//    console.log('Add result:', result);
//    return result;
//   }else if(handleMinus) {
//     let result = numberValueOne - numberValueTwo;
//     console.log('Minus result:', result);
//     return result;
//   }else if(handleTimes) {
//     let result = numberValueOne * numberValueTwo;
//     console.log('Times result:', result);
//     return result;
//   }else if(handleDivide) {
//     let result = numberValueOne / numberValueTwo;
//     console.log('Divide result:', result);
//     return result;
//   }else if(handleClear) {
//     numberValueOne.val('');
//     numberValueTwo.val('');
//   }

// }




function handleAdd() {
  console.log('In handleAdd.  Clicked');
  numberValueOne = Number($('#numOneIn').val());
  numberValueTwo = Number($('#numTwoIn').val());
  let result = numberValueOne + numberValueOne;
  console.log('In handleAdd', result);
}

function handleMinus() {
  console.log('In handleMinus.  Clicked');
  return true;
}

function handleTimes() {
  console.log('In handleTimes.  Clicked');
  return true;
}

function handleDivide() {
  console.log('In handleDivide.  Clicked');
  return true;
}

function handleEquals() {
  console.log('In handleEquals.  Clicked');
  renderToDom();
}

function handleClear() {
  console.log('In handleClear.  Clicked');
  
}