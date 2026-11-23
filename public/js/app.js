/* ======================================================================
   CAFETERÍA AROMA — app.js
   Módulo 2 · Semana 1: Fundamentos de JavaScript
   ======================================================================
   Este archivo NO modifica todavía la página (eso lo veremos en la
   Semana 2 con el DOM). Su objetivo es que practiquen y vean en la
   consola del navegador (F12 → pestaña "Console") los conceptos base:
   variables, tipos de datos, operadores, estructuras de control,
   funciones y arreglos/objetos — usando los datos reales de nuestra
   cafetería como ejemplo.

/* ----------------------------------------------------------------------
   1. VARIABLES Y TIPOS DE DATOS
   ------------------------------------------------------------------- */

// const: usamos const por defecto, cuando el valor NO va a cambiar.
const nombreCafeteria = "Cafetería Aroma";   // string (texto)
const anioFundacion = 2021;                  // number
const precioEspresso = 1.50;                 // number (decimal) - precio real del menú

// let: usamos let cuando el valor SÍ puede cambiar más adelante.
let abiertoAhora = true;                     // boolean (true / false)
let mesasDisponibles = 5;                    // number

// var: forma antigua, no la usamos en código nuevo (solo la mencionamos).
// var nombre = "evitar esto";

console.log("=== 1. Variables y tipos de datos ===");
console.log(nombreCafeteria, "-", "fundada en", anioFundacion);
console.log("Precio del espresso: $" + precioEspresso);
console.log("¿Abierto ahora?", abiertoAhora);
console.log("Mesas disponibles:", mesasDisponibles);
console.log("Tipo de dato de nombreCafeteria:", typeof nombreCafeteria);
console.log("Tipo de dato de precioEspresso:", typeof precioEspresso);
console.log("Tipo de dato de abiertoAhora:", typeof abiertoAhora);


/* ----------------------------------------------------------------------
   2. ARREGLOS (ARRAYS) Y OBJETOS
   ------------------------------------------------------------------- */

// Un OBJETO agrupa los datos de UN solo producto (clave: valor).
const cappuccino = {
  nombre: "Cappuccino",
  descripcion: "Espresso con leche vaporizada.",
  precio: 2.25,
  categoria: "bebida",
};

// Un ARREGLO de objetos representa TODO el menú.
// Estos son los productos reales en menu.html.
// Si se agregan más productos a la página, se deben agrégar aquí también.
const menu = [
  { nombre: "Espresso",    descripcion: "Intenso y aromático.",          precio: 1.50, categoria: "bebida" },
  { nombre: "Cappuccino",  descripcion: "Espresso con leche vaporizada.", precio: 2.25, categoria: "bebida" },
  { nombre: "Pan de queso", descripcion: "Horneado cada mañana.",        precio: 1.75, categoria: "comida" },
];

console.log("\n=== 2. Arreglos y objetos ===");
console.log("Objeto individual (cappuccino):", cappuccino);
console.log("Arreglo completo del menú:", menu);
console.log("Nombre del primer producto:", menu[0].nombre);
console.log("Precio del último producto:", menu[menu.length - 1].precio);
console.log("Cantidad de productos en el menú:", menu.length);


/* ----------------------------------------------------------------------
   3. OPERADORES
   ------------------------------------------------------------------- */

const personasEnGrupo = 4;
const consumoPromedio = 3.25;

// Aritméticos: +  -  *  /  %
const totalEstimado = personasEnGrupo * consumoPromedio;

// Comparación:
const esGrupoGrande = personasEnGrupo > 6;

// Lógicos: &&  ||  ! Se necesita reserva si el grupo tiene 6 o más personas, O si la cafetería está cerrada ahora." — cualquiera de las dos razones activa la reserva; no hace falta que se cumplan ambas al mismo tiempo.
const necesitaReserva = personasEnGrupo >= 6 || !abiertoAhora;

console.log("\n=== 3. Operadores ===");
console.log("Total estimado para el grupo: $" + totalEstimado.toFixed(2)); // El 2 entre paréntesis es la cantidad de decimales que quieres — podría ser .toFixed(0) (sin decimales) o .toFixed(1) (uno solo), pero para dinero casi siempre se usa 2.
console.log("¿Es un grupo grande (más de 6)?", esGrupoGrande);
console.log("¿Necesita reserva?", necesitaReserva);


/* ----------------------------------------------------------------------
   4. ESTRUCTURAS DE CONTROL (if / else, for, while)
   ------------------------------------------------------------------- */

console.log("\n=== 4. Estructuras de control ===");

// if / else if / else
let mensajeMesa;
if (personasEnGrupo > 6) {
  mensajeMesa = "Por favor, llama con anticipación para grupos grandes.";
} else if (personasEnGrupo >= 3) {
  mensajeMesa = "Tenemos mesas para grupos medianos disponibles.";
} else {
  mensajeMesa = "Mesa disponible de inmediato.";
}
console.log(mensajeMesa);

// for: recorrer el arreglo del menú con un índice
console.log("Menú completo (con for):");
for (let i = 0; i < menu.length; i++) {   // .length es una propiedad que tienen los arreglos (arrays) en JavaScript, y devuelve cuántos elementos tiene ese arreglo.
  console.log(`  ${i + 1}. ${menu[i].nombre} - $${menu[i].precio}`);
}

// while: ejemplo simple contando mesas ocupadas hasta llenar el local. Este bloque es un ejemplo de bucle while, que repite una acción mientras una condición sea verdadera.
let mesasOcupadas = 0; // Empezamos un contador en 0. Usamos let porque su valor va a cambiar.
while (mesasOcupadas < mesasDisponibles) {     
  mesasOcupadas++;
}
console.log("Mesas ocupadas tras simular el llenado:", mesasOcupadas);


/* ----------------------------------------------------------------------
   5. FUNCIONES
   ------------------------------------------------------------------- */

console.log("\n=== 5. Funciones ===");

// Función tradicional: calcula el total a pagar
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

// Arrow function (sintaxis moderna): aplica un descuento porcentual
const aplicarDescuento = (total, porcentaje) => {
  return total - (total * (porcentaje / 100));
};

// Arrow function: arma un mensaje de bienvenida personalizado
const saludar = (nombreCliente) => {
  return `¡Hola, ${nombreCliente}! Bienvenido/a a ${nombreCafeteria}.`;
};

const totalCompra = calcularTotal(precioEspresso, 3);
const totalConDescuento = aplicarDescuento(totalCompra, 10);

console.log("Total por 3 espressos ($1.50 c/u): $" + totalCompra.toFixed(2));
console.log("Total con 10% de descuento: $" + totalConDescuento.toFixed(2));
console.log(saludar("Ana"));


/* ----------------------------------------------------------------------
   6. TODO JUNTO: función que busca un producto en el menú por nombre
   ------------------------------------------------------------------- */

console.log("\n=== 6. Ejemplo integrador ===");

function buscarProducto(nombreBuscado) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
      return menu[i];
    }
  }
  return null; // no se encontró
}

const productoEncontrado = buscarProducto("Pan de queso");

if (productoEncontrado) {
  console.log(
    `Encontrado: ${productoEncontrado.nombre} - $${productoEncontrado.precio}`
  );
} else {
  console.log("Producto no encontrado en el menú.");
}
/* ----------------------------------------------------------------------
   7. DOM Y EVENTOS + VALIDACIÓN (Semana 2 y 3) — formulario de contacto
   ------------------------------------------------------------------- */
console.log("\n=== 7. DOM, eventos y validación ===");

// Seleccionamos el formulario y el elemento donde mostramos el mensaje.
// Ojo: estos elementos NO existen en menu.html, solo en contacto.html.
const form = document.querySelector('#form-contacto');
const mensajeForm = document.querySelector('#form-mensaje');

// Por eso protegemos el código con "if": solo se ejecuta cuando
// realmente estamos en la página que tiene ese formulario.
if (form && mensajeForm) {
  // Ojo: .btn también existe solo en contacto.html, pero como ya estamos
  // dentro del "if" de arriba, sabemos que estamos en esa página.
  const botonEnviar = document.querySelector('.btn');

  // Sonido corto de confirmación (Semana 4): se crea una sola vez aquí
  // afuera, y se reproduce con .play() solo cuando el envío es exitoso.
  const sonidoExito = new Audio('audio/confirmation.mp3');

    // Bootstrap: marca un campo como válido (verde) o inválido (rojo
  // con su mensaje). Siempre quita la clase contraria antes de agregar.
  function marcarCampo(selector, valido) {
    const campo = document.querySelector(selector);
    if (valido) {
      campo.classList.remove('is-invalid');
      campo.classList.add('is-valid');
    } else {
      campo.classList.remove('is-valid');
      campo.classList.add('is-invalid');
    }
  }

  form.addEventListener('submit', (event) => {
    // 1. Evita que el navegador recargue la página al enviar.
    event.preventDefault();

    // Estado de carga (Semana 4): como no tenemos un servidor real detrás,
    // simulamos una pequeña espera con setTimeout. Mientras "procesa", el
    // botón se deshabilita y cambia de texto — así el usuario ve que algo
    // está pasando, y no puede hacer clic dos veces mientras espera.
    botonEnviar.disabled = true;
    botonEnviar.textContent = 'Enviando...';

    setTimeout(() => {
      // 2. Leemos lo que el usuario escribió en nombre, correo y mensaje.
      const nombre = document.querySelector('#nombre').value;
      const correo = document.querySelector('#correo').value;
      // Ojo: se llama mensajeTexto y NO mensajeForm, porque mensajeForm ya
      // es el <p> donde escribimos el resultado (arriba en este archivo).
      const mensajeTexto = document.querySelector('#mensaje').value;

      // 3. Validamos cada campo por separado, para marcarlo con Bootstrap:
      //    nombre y mensaje no vacíos (trim quita espacios), correo con '@'.
      const nombreOk = nombre.trim() !== '';
      const correoOk = correo.includes('@');
      const mensajeOk = mensajeTexto.trim() !== '';

      marcarCampo('#nombre', nombreOk);
      marcarCampo('#correo', correoOk);
      marcarCampo('#mensaje', mensajeOk);

      if (!nombreOk || !correoOk || !mensajeOk) {
        mensajeForm.textContent = 'Revisa los campos marcados.';
        // Quitamos 'exito' por si quedó de un envío anterior exitoso.
        mensajeForm.classList.remove('exito');
        mensajeForm.classList.add('error');

        // Reactivamos el botón aunque la validación haya fallado.
        botonEnviar.disabled = false;
        botonEnviar.textContent = 'Enviar mensaje';
        return; // corta la función aquí: no sigue hacia el mensaje de éxito.
      }

      // 4. Leemos cuál de los radio buttons (mismo name, "metodo-contacto")
      //    está marcado con :checked, y lo traducimos a un texto natural.
      const metodo = document.querySelector('input[name="metodo-contacto"]:checked').value;
      const metodosTexto = {
        correo: 'correo electrónico',
        telefono: 'teléfono',
        whatsapp: 'WhatsApp',
      };

      // 5. Solo llega aquí si la validación pasó: muestra el mensaje de
      //    éxito directamente en la página (no en la consola), con el
      //    nombre real y el método de contacto elegido, y le aplica el
      //    estilo .exito del CSS.
       mensajeForm.textContent = `¡Gracias, ${nombre}! Te contactaremos por ${metodosTexto[metodo]}.`;
      // Quitamos 'error' por si quedó de un intento anterior fallido —
      // si no, las dos clases quedan activas a la vez y el CSS se confunde.
       mensajeForm.classList.remove('error');
      mensajeForm.classList.add('exito');

      // Reproducimos el sonido de confirmación solo en el caso de éxito.
       sonidoExito.play();

      // Reactivamos el botón al terminar.
       botonEnviar.disabled = false;
      botonEnviar.textContent = 'Enviar mensaje';
     }, 800);
   });
 }


/* ----------------------------------------------------------------------
   7b. MOSTRAR/OCULTAR CAMPO SEGÚN OTRA RESPUESTA (Semana 3)
   ------------------------------------------------------------------- */

console.log("\n=== 7b. Mostrar/ocultar campo de personas ===");

// El campo "Número de personas" solo tiene sentido si el asunto elegido
// es "Reservar una mesa" — lo ocultamos en los demás casos.
const asunto = document.querySelector('#asunto');
const campoPersonas = document.querySelector('#personas');

// Ojo: estos elementos tampoco existen en menu.html, por eso el "if".
if (asunto && campoPersonas) {
  const contenedorPersonas = campoPersonas.closest('.campo');

  function actualizarCampoPersonas() {
    if (asunto.value === 'reserva') {
      contenedorPersonas.style.display = '';
    } else {
      contenedorPersonas.style.display = 'none';
    }
  }

  actualizarCampoPersonas(); // estado inicial al cargar la página
  asunto.addEventListener('change', actualizarCampoPersonas);
}


/* ----------------------------------------------------------------------
   8. CREACIÓN DINÁMICA DE CONTENIDO (Semana 3) — createElement + innerHTML
   ------------------------------------------------------------------- */
/*
   Esto mismo lo vimos primero en vivo en la consola (sobre menu.html),
   probando con productos nuevos como "Latte" y "Té Chai". Como esos
   cambios de consola NO persisten (viven solo en el DOM en memoria,
   no en el archivo menu.html guardado en disco), aquí lo dejamos fijo
   en app.js para que se ejecute automáticamente cada vez que alguien
   abra la página.
*/

console.log("\n=== 8. Creación dinámica de contenido ===");

// Productos nuevos a agregar dinámicamente (no están escritos en el HTML).
const productosNuevos = [
  { nombre: "Latte", descripcion: "Con leche cremosa.", precio: 2.75, imagen: "imagen/latte.png" },
  { nombre: "Té Chai", descripcion: "Especias e infusión.", precio: 2.00, imagen: "imagen/te_chai.png" },
];

// Ojo: la fila solo existe en menu.html, por eso protegemos con "if".
// Ahora buscamos la fila de Bootstrap (#menu .row) y no #menu,
// para que las tarjetas nuevas entren dentro de la rejilla.
const contenedorMenu = document.querySelector('#menu .row');

if (contenedorMenu) {
  productosNuevos.forEach((producto) => {
    // Cada producto es una columna de la rejilla (1, 2 o 3 por fila)
    const columna = document.createElement('article');
    columna.className = 'col-12 col-md-6 col-lg-4';
    // Dentro de la columna va la tarjeta de Bootstrap
    columna.innerHTML = `
      <div class="card producto h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h3 class="card-title h5">${producto.nombre}</h3>
          <p class="card-text">${producto.descripcion} <strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
          <button class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalProducto" data-nombre="${producto.nombre}"data-descripcion="${producto.descripcion} Precio: $${producto.precio.toFixed(2)}"><i class="bi bi-eye me-2"></i>Ver detalle</button>
          </div>
      </div>
    `;
    contenedorMenu.appendChild(columna);
  });
}

/* ----------------------------------------------------------------------
   9. MENÚ HAMBURGUESA (Semana 4)
   ------------------------------------------------------------------- */
/*
   A diferencia de la Sección 7 (que solo corre en contacto.html), este
   código corre en las 4 páginas, porque el botón .menu-toggle va en el
   <header> que se repite en cada una. Igual lo protegemos con "if" por
   si alguna página todavía no tiene el botón agregado.
*/

console.log("\n=== 9. Menú hamburguesa ===");

const botonMenu = document.querySelector('.menu-toggle');
const navLista = document.querySelector('nav ul');

if (botonMenu && navLista) {
  botonMenu.addEventListener('click', () => {
    navLista.classList.toggle('activo');
  });
}
/* ----------------------------------------------------------------------
   9. Video (Semana 4)
   ------------------------------------------------------------------- */

const video = document.querySelector('video');
const botonVideo = document.querySelector('.boton-video');

if (video && botonVideo) {
  botonVideo.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      botonVideo.textContent = 'Pausar';
    } else {
      video.pause();
      botonVideo.textContent = 'Reproducir';
    }
  });
} 


/* ----------------------------------------------------------------------
   10. MÚSICA DE FONDO (Semana 4)
   ------------------------------------------------------------------- */
/*
   Los navegadores bloquean el autoplay con sonido, así que SIEMPRE
   necesitamos un botón que el usuario presione primero. El <audio> y
   el botón solo existen en index.html, por eso el "if".
*/

console.log("\n=== 10. Música de fondo ===");

const musica = document.querySelector('#musica-ambiente');
const botonMusica = document.querySelector('.boton-musica');

if (musica && botonMusica) {
  botonMusica.addEventListener('click', () => {
    if (musica.paused) {
      musica.play();
      botonMusica.textContent = '🔇 Pausar música';
    } else {
      musica.pause();
      botonMusica.textContent = '🎵 Reproducir música';
    }
  });
}

// 11. SELLO DE PROMOCIÓN (Canvas)
const canvas = document.querySelector('#sello-promo');

if (canvas) {
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#FFB703';
  ctx.beginPath();
  ctx.arc(70, 70, 65, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#0D1B2A';
  ctx.textAlign = 'center';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('2x1', 70, 65);
  ctx.font = '14px sans-serif';
  ctx.fillText('Viernes', 70, 85);
}

// Cambia el contenido del modal según el producto elegido
const modalProducto = document.querySelector('#modalProducto');
if (modalProducto) {
  modalProducto.addEventListener('show.bs.modal', (evento) => {
    // El botón que abrió el modal
    const boton = evento.relatedTarget;
    document.querySelector('#modal-titulo').textContent = boton.dataset.nombre;
    document.querySelector('#modal-texto').textContent = boton.dataset.descripcion;
  });
}

// Chart.js: gráfico de precios con los datos de la API
const lienzoPrecios = document.querySelector('#grafico-precios');

// Solo se ejecuta en la página que tiene el gráfico
if (lienzoPrecios) {
  const dibujarGrafico = async () => {
    try {
      const respuesta = await fetch('/api/menu');
      if (!respuesta.ok) {
        throw new Error('Respuesta ' + respuesta.status);
      }
      const menu = await respuesta.json();

      new Chart(lienzoPrecios, {
        type: 'bar',
        data: {
          labels: menu.map((p) => p.nombre),
          datasets: [{
            label: 'Precio ($)',
            data: menu.map((p) => p.precio),
            backgroundColor: '#D98E48'   // naranja de la marca
          }]
        },
        options: { scales: { y: { beginAtZero: true } } }
      });
    } catch (error) {
      console.error('No se pudo cargar el gráfico:', error);
    }
  };

  dibujarGrafico();
}



