// Arreglo con 5 ciudades
const ciudades = [
    'Guadalajara',
    'Monterrey',
    'Puebla',
    'Tijuana',
    'León'
];

// Función para mostrar las ciudades en la consola usando forEach
function mostrarCiudadesEnConsola() {
    console.log(`
 _     _     _              _        _____ _           _           _            
| |   (_)   | |            | |      /  __ (_)         | |         | |           
| |    _ ___| |_ __ _    __| | ___  | /  \/_ _   _  __| | __ _  __| | ___  ___  
| |   | / __| __/ \` |  / _\` |/ _ \\ | |   | | | | |/ \` |/ _\` |/ _\` |/ _ \\/ __| 
| |___| \\__ \\ || (_| | | (_| |  __/ | \\__/\\ | |_| | (_| | (_| | (_| |  __/\\__ \\ 
\\_____/_|___/\\__\\__,_|  \\__,_|\\___|  \\____/_|\\__,_|\\__,_|\\__,_|\\__,_|\\___||___/
    `);
    ciudades.forEach((ciudad, index) => {
        console.log(`${index + 1}. ${ciudad}`);
    });
}

// Llamar la función para mostrar en consola al cargar la página
mostrarCiudadesEnConsola();

// Obtener referencias del DOM
const botonMostrar = document.getElementById('btnMostrarLista');
const contenedorCiudades = document.getElementById('contenedorCiudades');

// Variable para controlar si la lista está visible
let listaVisible = false;

// Función para crear y mostrar la lista en el navegador
function mostrarListaEnPagina() {
    // Si la lista ya está visible, ocultarla
    if (listaVisible) {
        contenedorCiudades.innerHTML = '<p class="mensaje-inicial">Presiona el botón para mostrar la lista de ciudades.</p>';
        botonMostrar.textContent = 'Mostrar Lista';
        listaVisible = false;
        return;
    }

    // Limpiar el contenedor
    contenedorCiudades.innerHTML = '';

    // Crear elemento ul
    const lista = document.createElement('ul');

    // Usar forEach para agregar cada ciudad al DOM
    ciudades.forEach((ciudad, index) => {
        // Crear elemento li
        const itemLista = document.createElement('li');
        
        // Agregar el texto de la ciudad
        itemLista.textContent = ciudad;
        
        // Agregar animación con delay
        itemLista.style.animationDelay = `${index * 0.1}s`;
        
        // Agregar el li al ul
        lista.appendChild(itemLista);
    });

    // Agregar la lista completa al contenedor
    contenedorCiudades.appendChild(lista);
    
    // Cambiar el texto del botón
    botonMostrar.textContent = 'Ocultar Lista';
    listaVisible = true;

    // Mostrar mensaje en consola
    console.log("Lista mostrada en el navegador");
}

// Event listener para el botón
botonMostrar.addEventListener('click', mostrarListaEnPagina);

// Mensaje de bienvenida en consola
console.log('%cBienvenido a lista de datos', 'background: #FFB6C8; color: white; font-size: 20px; font-weight: bold; padding: 10px; border-radius: 5px;');
console.log('%cProyecto de Desarrollo de Software Frontend I', 'color: #FF9AB5; font-size: 14px; font-weight: bold;');
console.log('%cPor: Auri', 'color: #8B7A8C; font-size: 12px;');
console.log("Array de ciudades:", ciudades);