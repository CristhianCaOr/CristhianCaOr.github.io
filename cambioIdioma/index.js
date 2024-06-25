
// idioma
const castellano = document.getElementById('opcionEs');
const ingles = document.getElementById('opcionEn');


// titulos
const tituloInicio = document.getElementById('habilidades');
const tituloAcercaDeMi = document.getElementById('acercaDeMi');
const tituloHabilidades = document.getElementById('inicio');



// secciones de la pagina
const inicio = document.getElementsByClassName('boton-inicio');
const acercaDeMi = document.getElementsByClassName('boton-acdm');
const habilidades = document.getElementsByClassName('boton-habilidades');


// variables del inicio
const nombre = document.getElementById('nombre');
const profesion = document.getElementById('profesion');
const parrafo1 = document.getElementById('parrafo-inicio');
let nombreOG = nombre.textContent
let profesionOG = profesion.textContent
let parrafo1OG = parrafo1.textContent


// variables acerca de mi

const portadaAcercaDeMi = document.getElementById('titulo-acdm');
const parrafoacdm1 = document.getElementById('parrafo-acdm-1');
const parrafoacdm2 = document.getElementById('parrafo-acdm-2');
const parrafoacdm3 = document.getElementById('parrafo-acdm-3');

// variables habilidades

const parrafoHabilidades = document.getElementById('parrafo-habilidades')
const advertenciaParrafo = document.getElementById('advertencia')
const habilidadesProgramacion = document.getElementById('tech')
const misIdiomas = document.getElementById('idiomasQueHablo')

// codigo de ingles

function cambioIdiomaInicio(){
    ingles.addEventListener('click', function(event) {
        event.preventDefault();
        nombre.textContent = "El mother fucker";
    })
    
    castellano.addEventListener('click', function(event) {
        event.preventDefault();
        nombre.textContent = nombreOG;
    })
}







cambioIdiomaInicio()


