const express = require('express')
const server = express();
const session = require('express-session');

server.use(session({secret: 'secret'}));

const hostname = '0.0.0.0';
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/apinodejs')
// moongoose.connect('mongodb://localhost:27017/apinodejs');  // Without docker

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

 

server.get("/", (req, res) => {
  res.json({ message: "Haxolot api application." });
});


const userRoute = require('./api/routes/userRoute');
userRoute(server);


const schoolRoute = require('./api/routes/schoolRoute');
schoolRoute(server); 


const teamRoute = require('./api/routes/teamRoute');
teamRoute(server);
  
server.listen(port, hostname);