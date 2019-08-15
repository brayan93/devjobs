const mongoose = require('mongoose');
mongoose.Promise = Promise;
require('dotenv').config({path: 'variables.env'});

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});

mongoose.connection.on('error', (error) => {
    console.log(error);
});

// MODELOS
require('../models/Vacante');