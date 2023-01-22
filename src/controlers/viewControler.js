const db = require('../../db.json')
const cats = db.cats

const breeds = db.breeds
exports.getHome = (req,res) =>{
    res.render('index', {cats, layout: 'home'})
} 


exports.createView = (req, res) =>{
    res.render('addCat', {breeds})
}