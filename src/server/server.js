const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('../config/db.js');

app.get('/api/resdata', (req, res) => {
    console.log('/api/resdata')
    const sql = `select * from usedcar_db;`
    db.query(sql, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
})

app.get('/api/searchData/:searchText', (req, res) => {
    console.log('/api/searchData/:searchText')
    const searchText = req.params.searchText;
    const sql = `select * from usedcar_db where modelname like '%${searchText}%';`
    db.query(sql, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
})

app.get('/api/viewdetail/:substationnumber', (req, res) => {
    console.log('/api/viewdetail')
    const text = req.params.substationnumber;
    const sql = `select * from usedcar_db where substationnumber = '${text}';`
    db.query(sql, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
})

app.post('/api/submitdata/:values', (req, res) => {
    console.log('/api/submitdata/')
    console.log(req.params.values);
    const stringifyItem = req.params.values;
    const values = JSON.parse(stringifyItem)
    console.log(values.lowPrice);
    console.log(values.checkedItems);
    // for(let i = 0;i<values.checkedItems.length;i++){
    //     console.log(values.checkedItems[i])
    // }
    // values.checkedItems.forEach(value => {
    //     db.query(`select * from usedcar_db where seg like '${value}'`,(err,data)=>{
    //         if(!err){
    //             return console.log(data.length);

    //         }else{
    //             return console.log(err);
    //         }
    //     })
    // });
    if (values.checkedItems.length <= 1) {
        db.query(`select * from usedcar_db where seg like '${values.checkedItems[0]}'`, (err, data) => {
            if (!err) {
                return res.send(data);

            } else {
                return console.log(err);
            }
        })
    }else if(values.checkedItems.length > 1){
        db.query(`select * from usedcar_db where seg like '${values.checkedItems[0]}' or seg like '${values.checkedItems[1]}'`, (err, data) => {
            if (!err) {
                return res.send(data);
            } else {
                return console.log(err);
            }
        })
    }
})

app.get('/api/similarCars/:substationnumber', (req, res) => {
    console.log('/api/similarCars')
    const text = req.params.substationnumber;
    console.log(text)
    const sql = `select size from usedcar_db where substationnumber like '%${text}%';`  
    db.query(sql, (err, data) => {
        if (!err) {
            const carSize = data[0].size;
            db.query(`select * from usedcar_db where size like '${carSize}'`,(err,data)=>{
                res.send(data);
            })
        } else {
            console.log(err);
        }
    });
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})