const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('../config/db.js');

// app.get('/api/',(res,req)=>{
//     console.log('/api');
// })

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})