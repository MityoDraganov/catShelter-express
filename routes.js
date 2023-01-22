const router = require('express').Router()
const catControler = require('./src/controlers/catControler')
const viewControler = require('./src/controlers/viewControler')

//VIEWS
router.get('/', viewControler.getHome)

router.get('/cats/add-cat',viewControler.createView)


router.get('/cats/add-breed', (req, res) =>{

    res.render('addBreed')
})


//CAT CREATION (CRUD)
router.post('/cats/add-cat', catControler.createCat)

//BREED CREATION (CRUD)
router.post('/cats/add-breed', catControler.createBreed)



module.exports = router