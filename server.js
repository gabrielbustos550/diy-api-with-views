const express = require('express')
const app = express();
const rowdy = require('rowdy-logger')

const ejsLayouts = require('express-ejs-layouts')

const methodOverride = require('method-override')

const rowdyRes = rowdy.begin(app)



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(ejsLayouts)
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))



app.use('/countries', require('./controllers/countriesController'))
app.use('/continents', require('./controllers/continentsController'))





app.get('/', (req, res) => {
  res.render('index')
})







const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('server started!');
  rowdyRes.print()
})
