// Importa la librería Express (la que instalamos con npm)
const express = require('express');
// Importa 'path', un módulo que ya trae Node para armar rutas de carpetas
const path = require('path');

// Crea la aplicación: este objeto "app" es nuestro servidor
const app = express();
// Número de puerto donde el servidor va a escuchar peticiones
const PUERTO = 3000;

// Permite que el servidor entienda datos que lleguen en formato JSON (lo usaremos con el formulario)
app.use(express.json());
// Entrega tal cual los archivos de la carpeta "public": páginas, CSS, imágenes, audio y video
// __dirname es la carpeta donde está este archivo
app.use(express.static(path.join(__dirname, 'public')));

// Los datos del menú: un arreglo de objetos, como los de JavaScript que ya conocen
const menu = [
  { id: 1, nombre: 'Espresso', descripcion: 'Intenso y aromático.', precio: 1.50, categoria: 'bebida', imagen: 'imagen/espresso.png' },
  { id: 2, nombre: 'Cappuccino', descripcion: 'Espresso con leche vaporizada.', precio: 2.25, categoria: 'bebida', imagen: 'imagen/cappucino.png' },
  { id: 3, nombre: 'Pan de queso', descripcion: 'Horneado cada mañana.', precio: 1.75, categoria: 'panaderia', imagen: 'imagen/pan_queso.png' },
  { id: 4, nombre: 'Latte', descripcion: 'Con leche cremosa.', precio: 2.75, categoria: 'bebida', imagen: 'imagen/latte.png' },
  { id: 5, nombre: 'Té Chai', descripcion: 'Especias e infusión.', precio: 2.00, categoria: 'bebida', imagen: 'imagen/te_chai.png' }
];

// Ruta: cuando llegue una petición GET a /api/menu, ejecuta esta función
// req = la petición que llega, res = la respuesta que enviamos
app.get('/api/menu', (req, res) => {
  // Convierte el arreglo a JSON y lo envía al navegador
  res.json(menu);
});

// Ruta con parámetro: ":id" es una parte de la dirección que cambia
// Ejemplo: /api/menu/2 -> el 2 queda guardado en req.params.id
app.get('/api/menu/:id', (req, res) => {
  // Busca en el arreglo el producto cuyo id coincida
  // Number() convierte el texto "2" en el número 2, porque === compara también el tipo
  const p = menu.find((x) => x.id === Number(req.params.id));
  // Si no se encontró el producto (p quedó vacío)...
  if (!p) {
    // ...responde con el código 404 (no encontrado) y un mensaje de error en JSON
    // return hace que la función termine aquí y no siga a la línea de abajo
    return res.status(404).json({ error: 'No existe' });
  }
  // Si sí se encontró, envía ese producto en formato JSON
  res.json(p);
});

// Deja el servidor encendido, escuchando peticiones en el puerto 3000
app.listen(PUERTO, () => {
  // Cuando ya está listo, escribe este mensaje en la terminal
  console.log(`Servidor listo en http://localhost:${PUERTO}`);
});