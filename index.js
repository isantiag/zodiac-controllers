const express = require('express')
const app = express()
const layouts = require('express-ejs-layouts')


// middleware
app.set('view engine','ejs')
app.use(layouts)
app.use('/air', require('./controllers/air'))
app.use('/earth', require('./controllers/earth'))
app.use('/fire', require('./controllers/fire'))
app.use('/water', require('./controllers/water'))


// Home Route
app.get('/', (req,res) =>{
    res.render('index.ejs')
})


app.listen(3000, ()=>{
    console.log('You are listening to the smooth sounds of port 3000') 
})









