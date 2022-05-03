
require('dotenv').config(); 

var express = require('express');
var cors = require('cors');
var app = express();
const pool = require('./db');

const port = 3000;

app.use(cors());

app.get("/login/:email/:password", pool.loginUser)
app.post("/reservation/:kor_id/:ustanova", pool.setReservation)

app.listen(port, () => {
    var host = "localhost";
    console.log(`Server listening on port http://%s:%s`, host, port);
})