
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

let equationData = [];

const serverData =[];

// GET ROUTE

app.get("/data", (req, res) => {
  console.log("you got to /calculate!");
  console.log(serverData);
  // response is to send inventory array
  
  res.send(serverData);

});


app.get("/calculate", (req, res) => {
  console.log("you got to /calculate!");
  console.log(equationData);
  // response is to send inventory array
  
  serverData.push(equationData[0]);

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

    let resultObject = {
      valueOne: numberValueOne,
      valueTwo: numberValueTwo,
      operator: '-',
      outcome: result
    }

    equationData.push(resultObject);

    return result;

  }else if (equationObject.operator === 'times') {
    let result = Number(numberValueOne) * Number(numberValueTwo);
    console.log('In times:', result);

    let resultObject = {
      valueOne: numberValueOne,
      valueTwo: numberValueTwo,
      operator: '*',
      outcome: result
    }

    equationData.push(resultObject);

    return result;

  }else if (equationObject.operator === 'divide') {
    let result = Number(numberValueOne) / Number(numberValueTwo);
    console.log('In divide', result);

    let resultObject = {
      valueOne: numberValueOne,
      valueTwo: numberValueTwo,
      operator: '/',
      outcome: result
    }

    equationData.push(resultObject);

    return result;

  }else{
    console.log('In handleEquation. This doesnt work!');
    return false;
  }
}// end equation


// START SERVER!
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})