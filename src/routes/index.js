const express = require('express');
const app = express();

app.get('/', (req, res)=>{ 
    res.json({message: 'api.Jesus13th.Dev'}); 
});

module.exports = app;