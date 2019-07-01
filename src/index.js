const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(require('./routes'));


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// require('./app/controllers/index')(app);

app.use(cors());
server.listen(3000);
