const express = require('express');
const router = express.Router();
const propiedadesMarcadasService = require("../service/propiedadesMarcadasService");

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.status(200).send(await propiedadesMarcadasService.get() );
});

module.exports = router;
