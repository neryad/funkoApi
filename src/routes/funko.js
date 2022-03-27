const express = require('express');
const {
  getFunkos,
  getFunkoById,
  postFunko,
  putFunkoById,
  deleteFunko,
} = require('../controllers/funko.js');
const router = express.Router();

router.get('/funkos', getFunkos);
router.get('/funko/:id', getFunkoById);
router.post('/funkos', postFunko);
router.put('/funko/:id', putFunkoById);
router.delete('/funko/:id', deleteFunko);

module.exports = router;
