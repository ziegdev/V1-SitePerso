// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();

// J'importe les modules téléchargés

const express = require('express');
const app = express();
const ejs = require('ejs');
const dotenv = require('dotenv');
dotenv.config();

// Import et utilisation du router
const router = require('./app/router');
app.use(router);

//config ejs
app.set('view engine', 'ejs');
app.set('views', '/var/www/html/Projet-perso/V1-SitePerso/app/views');

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static(__dirname + '/integration'));

// Ecoute du serveur sur le port 1986

const PORT = 1986;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
