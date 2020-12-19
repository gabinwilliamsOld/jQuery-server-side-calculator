
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

let equationData = [];



// GET ROUTE

app.get("/calculate", (req, res) => {
  console.log("you got to /calculate!");

  // response is to send inventory array
  res.send(equationData);
  equationData = [];
});

// POST ROUTE
app.post("/calculate", (req, res) => {
  // the REQUEST needs to be able to receive data
  let equationObject = req.body; // .body is coming from body parser
 
  // pushes newItem into inventory array
  // equationData.push(equationObject);
  console.log(equationObject);
  handleEquation(equationObject);

  // 201 code means created
  res.sendStatus(201);
});

// FUNCTIONS

function handleEquation(equationObject) {

  let numberValueOne = equationObject.valueOne;
  let numberValueTwo = equationObject.valueTwo;
  console.log('valueOne and valueTwo:', numberValueOne, numberValueTwo);

  if(equationObject.operator === 'plus') {
    let result = Number(numberValueOne) + Number(numberValueTwo);
    console.log('In add:', result);

    let resultObject = {
      valueOne: numberValueOne,
      valueTwo: numberValueTwo,
      operator: '+',
      outcome: result
    }

    equationData.push(resultObject);

    return result;

  }else if (equationObject.operator === 'minus') {
    let result = Number(numberValueOne) - Number(numberValueTwo);
    console.log('In minus:', result);
    return result;

  }else if (equationObject.operator === 'times') {
    let result = Number(numberValueOne) * Number(numberValueTwo);
    console.log('In times:', result);
    return result;

  }else if (equationObject.operator === 'divide') {
    let result = Number(numberValueOne) - Number(numberValueTwo);
    console.log('In divide', result);
    return result;

  }else{
    console.log('In handleEquation. This doesnt work!');
    return false;
  }

  
  

  // console.log('In handleAdd', result);
  
  // $('#minusBtn').prop('disabled', true);
  // $('#timesBtn').prop('disabled', true);
  // $('#divideBtn').prop('disabled', true);
  // return result;
}

// function handleEquals() {
//   console.log('In handleEquals.  Clicked');
//   $('#result').text('');
  

//   if(!$('#addBtn').prop('disabled')) {
//     console.log('Data from add!!');
//     $('#equationHistory').append(`
//     <li>${numberValueOne} + ${numberValueTwo} = ${handleAdd()}</li>
//   `);
//     $('#result').text(handleAdd());

//   }else if(!$('#minusBtn').prop('disabled')) {
//     console.log('Data from minus');

//     $('#equationHistory').append(`
//     <li>${numberValueOne} - ${numberValueTwo} = ${handleMinus()}</li>
//   `);
//     $('#result').text(handleMinus());

//   }else if(!$('#timesBtn').prop('disabled')) {
//     console.log('Data from times');

//     $('#equationHistory').append(`
//     <li>${numberValueOne} * ${numberValueTwo} = ${handleTimes()}</li>
//   `);
//     $('#result').text(handleTimes());

//   }else if(!$('#divideBtn').prop('disabled')) {
//     console.log('Data from divide');

//     $('#equationHistory').append(`
//     <li>${numberValueOne} / ${numberValueTwo} = ${handleDivide()}</li>
//   `);
//     $('#result').text(handleDivide());

//   }else {
//     console.log('HandleEquals isnt working right');
//   }
//   sendValues();
//   clearInputBox();
// }





// START SERVER!
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
})