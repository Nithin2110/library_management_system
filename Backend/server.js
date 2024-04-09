const express = require('express')
const server = express()
var cors = require('cors')
server.use(cors())

const port = 4000
const mongoose = require('mongoose');
var routes = require('./routes/routes');
mongoose.connect('mongodb://127.0.0.1:27017/CRUD',{useNewUrlParser:true,useUnifiedTopology:true},function checkDB(error){
    if (error){
        console.log("error");
    }
    else{
        console.log("Connected");
    }
});


server.use(express.json());
server.use(routes);


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})