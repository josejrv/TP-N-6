const fs = require('fs')

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
    index: (req, res) => {
        res.send(heroes)
    },

    detalle: (req, res) => {
        let id = req.params.idHeroe;

        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        });

        let heroeSeleccionado = heroe[0];

        if (heroeSeleccionado == undefined) {
            res.send('Este heroe no fue encontrado : ( pruebe con otro numero de id.')
        } else {
            res.send(`Hola mi nombre es ${heroeSeleccionado.nombre} y soy ${heroeSeleccionado.profesion}`)
        }
    },

    biografia: (req, res) => {
        let id = req.params.idHeroe;
        let ok = req.params.ok;

        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        });


        let heroeSeleccionado = heroe[0];

        if (heroeSeleccionado == undefined) {
            return res.send('No encontramos un heroe para mostrarte en su biografia');
        }

        if (ok == 'ok') {
            return res.send(`${heroeSeleccionado.nombre}: ${heroeSeleccionado.resenia}`)
        } else {
            return res.send(`${heroeSeleccionado.nombre}. Lamento que no desees saber mas de mi :(`)
        }
    }

}