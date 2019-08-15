const Vacante = require('../models/Vacante');
exports.mostrarTrabajos = async (req, res, next) => {
    const vacantes = await Vacante.find();

    if (!vacantes) return next();
    res.render('home', {
        nombrePagina: 'DevJobs',
        tagLine: 'Encuentra y pública Trabajos para desarrolladores webb',
        barra: true,
        boton: true,
        vacantes
    });
}