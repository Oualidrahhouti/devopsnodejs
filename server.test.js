const request = require('supertest');
const app = require('./server'); // Chemin vers votre fichier de serveur Express

describe('Test des réponses du serveur', () => {
  it('Réponse de la racine', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Bienvenue sur le serveur Express !');
  });
});
