// Importa la librería Express (la que instalamos con npm)
const express = require('express');
// Importa 'path', un módulo que ya trae Node para armar rutas de carpetas
const path = require('path');

// Crea la aplicación: este objeto "app" es nuestro servidor
const app = express();
// Puerto distinto al de server.js, para poder tener los dos servidores encendidos a la vez
const PUERTO = 3001;

// Permite que el servidor entienda datos que lleguen en formato JSON
app.use(express.json());
// Entrega los archivos de la carpeta "public" (aquí está demo-contacto.html)
// __dirname es la carpeta donde está este archivo
app.use(express.static(path.join(__dirname, 'public')));

// Arreglo vacío donde guardamos los mensajes recibidos
// Vive en la memoria: al apagar el servidor, se pierde
const mensajes = [];

// Ruta POST: se ejecuta cuando el formulario envía datos a /api/contacto
// req = la petición que llega, res = la respuesta que enviamos
app.post('/api/contacto', (req, res) => {
  // Saca los cinco campos del cuerpo de la petición (req.body)
  const { nombre, correo, asunto, preferencia, mensaje } = req.body;
  // Valida en el servidor: ningún campo vacío y el correo debe contener "@"
  // ! significa "no", y || significa "o": si falta algo, entra al if
  if (!nombre || !correo || !correo.includes('@') || !asunto || !preferencia || !mensaje) {
    // 400 = petición inválida; return detiene la función aquí
    return res.status(400).json({ error: 'Datos inválidos' });
  }
  // Si todo está bien, guarda el mensaje como un objeto dentro del arreglo
  mensajes.push({ nombre, correo, asunto, preferencia, mensaje });
  // Muestra en la terminal lo que el servidor recibió
  console.log('Mensaje recibido:', { nombre, correo, asunto, preferencia, mensaje });
  // 201 = creado correctamente; responde con un texto de agradecimiento
  res.status(201).json({ texto: `Gracias, ${nombre}. Te contactaremos ${preferencia}.` });
});

// Ruta GET: devuelve todos los mensajes guardados hasta ahora
app.get('/api/mensajes', (req, res) => {
  // Convierte el arreglo a JSON y lo envía al navegador
  res.json(mensajes);
});

// Deja el servidor encendido, escuchando peticiones en el puerto 3001
app.listen(PUERTO, () => {
  // Cuando ya está listo, escribe este mensaje en la terminal
  console.log(`Demo de contacto en http://localhost:${PUERTO}`);
});