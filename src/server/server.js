const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('../config/db.js');

app.get('/api/resdata',(req,res)=>{
    console.log('/api/resdata')
    const sql = `select * from usedcar_db;`
    db.query(sql, (err,data)=>{
        if (!err){
            res.send(data);
        }else{
            console.log(err);
        }
    })
})

app.get('/api/searchData/:searchText',(req,res)=>{
    console.log('/api/searchData/:searchText')
    const searchText = req.params.searchText;
    const sql = `select * from usedcar_db where modelname like '%${searchText}%';`
    db.query(sql,(err,data)=>{
        if(!err){
            res.send(data);
        }else{
            console.log(err);
        }
    })
})

app.get('/api/viewdetail/:substationnumber',(req,res)=>{
    console.log('/api/viewdetail')
    const text = req.params.substationnumber;
    const sql = `select * from usedcar_db where substationnumber = '${text}';`
    db.query(sql, (err,data)=>{
        if (!err){
            res.send(data);
        }else{
            console.log(err);
        }
    })
})

app.get('/api/submitdata/:lowPrice/:highPrice/:checkedItems',(req,res)=>{
    console.log('/api/submitdata/')
    console.log(req.params);
    const checkedItems = req.params.checkedItems;
    const lowPrice = Number(req.params.lowPrice);
    const highPrice = Number(req.params.highPrice);
    const item = checkedItems.split(',');
    console.log(item)  
    const sql = `select * from usedcar_db where price < ${highPrice}
    and price > ${lowPrice};`
    db.query(sql,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err);
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})