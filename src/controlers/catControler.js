const Cat = require('../models/Cat')


exports.createCat = (req, res) =>{
    const {name, description, upload, breed} = req.body
    //console.log(req.body)
    const cat = new Cat(name, description, breed)
    console.log(cat)
    cat.save()


    res.redirect('/')
}

exports.createBreed = (req, res) => {
    
}