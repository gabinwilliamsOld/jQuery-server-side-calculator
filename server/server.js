
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

let equationData = [];



// GET & POST ROUTES

app.post("/calculate", (req, res) => {
  // the REQUEST needs to be able to receive data
  let equationObject = req.body; // .body is coming from body parser
 

  
  // pushes newItem into inventory array
  equationData.push(equationObject);
  console.log(equationData);
  // 201 code means created
  res.sendStatus(201);
});





// START SERVER!
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
})