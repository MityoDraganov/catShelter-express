const db = require('../../db.json')
const cats = db.cats
exports.getHome = (req,res) =>{
    res.render('index', {cats, layout: 'home'})
} 