'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

};
const express = require('express');
const ConvertHandler = require('../controllers/convertHandler');
const router = express.Router();
const convertHandler = new ConvertHandler();

router.get('/convert', (req, res) => {
    // Lógica para manejar la solicitud GET
});

module.exports = router;
