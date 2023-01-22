const router = require('express').Router()
const catControler = require('./src/controlers/catControler')

router.get('/', (req, res) =>{

    res.render('index', {layout: "home"})
})

router.get('/cats/add-cat', (req, res) =>{

    res.render('addCat')
})
router.get('/cats/add-breed', (req, res) =>{

    res.render('addBreed')
})


//CAT CREATION
router.post('/cats/add-cat', catControler.createCat)




module.exports = router