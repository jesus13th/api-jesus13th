const express = require('express');
const Multer = require('multer');
const cors = require('cors');
const admin = require('firebase-admin');
  
const app = express();
const upload = Multer({storage:Multer.memoryStorage()});

app.use(express.json());
app.use(cors());

app.use(require('./routes/index'))

const PORT = 4000;
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);