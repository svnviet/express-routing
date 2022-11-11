const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');
const Cwar2010 = require('./Cwar2010');

routes.use('/models', models);
routes.use('/:function_id', Cwar2010);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
