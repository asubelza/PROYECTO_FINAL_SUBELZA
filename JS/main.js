// DOM

// Usamos DOM para poder rellenar esta tabla en la pagina inicial.-

const especialistas = [
    { area: "Contable", nombre: "Contadora Yanina Elba Fernandez" },
    { area: "Contable", nombre: "Contador Joel Jave Mendoza" },
    { area: "Automatización", nombre: "Alfonso Waldemar Subelza" }
];

const tableBody = document.querySelector('.table tbody');

especialistas.forEach(e => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${e.area}</td><td>${e.nombre}</td>`;
    tableBody.appendChild(row);
});


// Cambiar la clase activa de los enlaces de navegación
//const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
//
//navLinks.forEach(link => {
//    link.addEventListener('click', () => {
//        navLinks.forEach(item => item.classList.remove('active'));  // Eliminar 'active' de todos
//        link.classList.add('active');  // Agregar 'active' al enlace clickeado
//    });
//});

// Toggle para mostrar y ocultar el menú en dispositivos móviles
//const toggleButton = document.querySelector('.navbar-toggler');
//const navMenu = document.querySelector('#navbarSupportedContent');
//
//toggleButton.addEventListener('click', () => {
//    navMenu.classList.toggle('collapse');
//});



