const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeControllers');
const vacantesController = require('../controllers/vacantesController');

module.exports = () => {
    router.get('/', homeController.mostrarTrabajos)

    // Crear Vacantes
    router.get('/vacantes/nueva', vacantesController.formularioNuevaVacante)
    // Enviar formulario
    router.post('/vacantes/nueva', vacantesController.agregarVacante)
    // Buscar vacante
    router.get('/vacantes/:url', vacantesController.mostrarVacante)
    // Editar vacante
    router.get('/vacantes/editar/:url', vacantesController.formEditarVacante)

    return router;
}