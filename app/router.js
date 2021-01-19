const express = require('express');

const router = express.Router();

// on importe nos controllers
const mainController = require('./controllers/mainController');

// page d'accueil
router.get('/', mainController.HomePage);
router.get('/CareerStory', mainController.CareerStory);


module.exports = router;