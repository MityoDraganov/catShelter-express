const viewEngine = require('express-handlebars')
const path = require('path')

function configViewEngine(app){
    app.engine('hbs', viewEngine.engine({
        extname: 'hbs'
    }))
    console.log(__dirname)
    app.set('view engine', 'hbs')
   app.set('views', path.join(__dirname, '../views'))
}

module.exports = configViewEngine