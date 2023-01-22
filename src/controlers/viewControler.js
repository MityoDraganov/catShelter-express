


exports.getHome = (req,res) =>{
    const db = require('../../db.json')
    const cats = db.cats


    res.render('index', {cats, layout: 'home'})
} 


exports.createView = (req, res) =>{
    const db = require('../../db.json')
    const breeds = db.breeds


    res.render('addCat', {breeds})
}

exports.detailsView = (req,res) =>{
    const db = require('../../db.json')
    const cats = db.cats
    const breeds = db.breeds


    const catId = req.params.id
    const currentCat = cats[catId]
    console.log('current cat')
    console.log(currentCat)
    //console.log(currentCat)
    res.render('editCat', {currentCat, breeds})
}