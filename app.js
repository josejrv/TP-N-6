const express = require ('express')
const router = require('./routes/heroes')
const app = express()


const routerHeroes = require('./routes/heroes')
const routerMain = require('./routes/main')

app.listen(3030,()=>console.log('servidor corriendo en el puerto 3030'))

app.use('/',routerMain)
app.use('/heroes',routerHeroes)


app.use(function(req, res, next) {
	res.status(404).send('Sorry cant find that!');
  });