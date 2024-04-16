const express = require('express');

const app = express();
const port = 3000;

// Route pour la racine
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Express !');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});

module.exports = app
