const Vacante = require('../models/Vacante');
exports.formularioNuevaVacante = (req, res) => {
    res.render('nueva-vacante', {
        nombrePagina: 'Nueva Vacante',
        tagLine: 'Llena el formulario y publica tu vacante'
    });
}
// Agregar vacantes a la DB
exports.agregarVacante = async (req, res) => {
    const vacante = new Vacante(req.body);

    // Crear arreglo de habilidades
    vacante.skills = req.body.skills.split(',');
    
    // Almacenar en DB
    const nuevaVacante = await vacante.save();

    if (nuevaVacante) {
        res.redirect(`/vacantes/${nuevaVacante.url}`);
    }
}
// Busca vacante por url
exports.mostrarVacante = async (req, res, next) => {
    const {url} = req.params;
    const mostrarVacante = await Vacante.findOne({url});
    if (mostrarVacante) {
        res.render('vacante', {
            vacante: mostrarVacante,
            nombrePagina: mostrarVacante.titulo,
            barra: true
        })
    } else {
        return next();
    }
}

exports.formEditarVacante = async (req, res, next) => {
    const {url} = req.params;
    const mostrarVacante = await Vacante.findOne({url});
    if (mostrarVacante) {
        res.render('editarVacante', {
            nombrePagina: `Editar - ${mostrarVacante.titulo}`,
            vacante: mostrarVacante
        })
    } else {
        return next();
    }
}