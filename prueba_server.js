const express = require('express');
const app = express();
const PUERTO = 3000;

app.get('/', (req, res) => {
  res.send('Hola desde el servidor de Aroma');
});

app.listen(PUERTO, () => {
  console.log(`Servidor en http://localhost:${PUERTO}`);
});
