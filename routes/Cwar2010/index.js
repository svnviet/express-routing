const routes = require('express').Router();

routes.get('/', (req, res) => {

  res.set({Content-Type：application/json,
            文字コード：utf-8})
  res.status(200).json({ message: 'Cwar2010!' });
});

module.exports = routes;
// const cars = require('express').Router();
// const all = require('./all');
// const single = require('./single');
// const findObject = require('../../utils/findObject');
//
// cars.param('carId', findObject('car'));
//
// cars.get('/', all);
// cars.get('/:carId', single);
//
// module.exports = cars;
