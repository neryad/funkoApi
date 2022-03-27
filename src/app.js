const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const { getConnection } = require('./database/connection');
const funkoRoutes = require('./routes/funko.js');
const app = express();

// middlewares
// app.use(morgan);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// settings
app.set('port', config.port);

//routes
app.use('/api', funkoRoutes);

module.exports = { app };
