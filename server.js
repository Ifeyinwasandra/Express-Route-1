const express = require('express');
const app = express();
const PORT = 5000;


app.get('/', function (req, res) {
    res.send('This is Nadres collection')
  });

// GET method route
app.get('/', (req, res) => {
    res.send('Home page')
});

// POST method route
app.post('/', (req, res) => {
    res.send('POST Home page')
  });


//   GET method route
app.get('/services', (req, res) => {
    res.send('Our services')
});

// POST method route
app.post('/', (req, res) => {
    res.send('POST Our services')
  });


//   GET method route
app.get('/contacts', (req, res) => {
    res.send('Contact us')
});


// POST method route
app.post('/', (req, res) => {
    res.send('POST Contact us')
  });


  const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
  
  app.use(requestTime);


app.listen (PORT, function(){
    console.log(`Server is running on port ${PORT}`)
});