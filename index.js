
// init project
var express = require('express');
var app = express();

// enable CORS
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/',(req,res)=>{
  const dateObj = new Date();
  res.send({unix:dateObj.getTime() ,utc: dateObj.toUTCString()});
});

app.get('/api/:date',(req,res)=>{
  const date = req.params.date;
  if(date===''){
    const dateObj = new Date();
    res.send({unix:dateObj.getTime() ,utc: dateObj.toUTCString()});
  }
  let dateObj = new Date(date);
  
  if(dateObj.toString() === 'Invalid Date'){
    dateObj = new Date(parseInt(date));
  }
  
  if(dateObj.toString() === 'Invalid Date')
    res.json({error: dateObj.toString()});
  const unix = dateObj.getTime();
  const utc = dateObj.toUTCString();
  
  console.log(dateObj.toString());
  console.log(unix.toString());
  console.log(utc.toString());
  res.send({unix: unix, utc: utc});
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});













