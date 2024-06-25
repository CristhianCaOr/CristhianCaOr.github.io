
// idioma
const castellano = document.getElementById('opcionEs');
const ingles = document.getElementById('opcionEn');



// variables del inicio
const nombre = document.getElementById('nombre');
const profesion = document.getElementById('profesion');
const parrafo1 = document.getElementById('parrafo-inicio');

let nombreOG = nombre.textContent
let profesionOG = profesion.textContent
let parrafo1OG = parrafo1.textContent


    ingles.addEventListener('click', function(event) {
        event.preventDefault();
        nombre.textContent = "El mother fucker";
    })
    
    castellano.addEventListener('click', function(event) {
        event.preventDefault();
        nombre.textContent = nombreOG;
    })









