


const fs = require('fs')
const path = require('path')

exports.createCat = (req, res) =>{
    const Cat = require('../models/Cat')
    const {name, description, upload, breed} = req.body
    //console.log(req.body)
    const cat = new Cat(name, description, breed)
    //console.log(cat)
    cat.save()


    res.redirect('/')
}

exports.createBreed = (req, res) => {
    const db = require('../../db.json')
    const breed = req.body.breed
    db.breeds.push(breed)
    const jsonData = JSON.stringify(db, null, 2)
   
    fs.writeFileSync(path.resolve(__dirname, '../../db.json'), jsonData)

    res.redirect('/')
}

exports.editCat = (req, res) => {
    console.log('EDIT')
    console.log(req.body)

    res.redirect('/')
}