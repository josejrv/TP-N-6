const express = require('express')

const router = express.Router();

const heroesControllers = require('../controllers/heroesController')

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/',heroesControllers.index);

router.get('/detalle/:idHeroe',heroesControllers.detalle)

router.get('/bio/:idHeroe/:ok?',heroesControllers.biografia)

module.exports = router