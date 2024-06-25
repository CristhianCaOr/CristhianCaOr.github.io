const idiomaActual = document.getElementsByClassName('translate')
const idiomas = document.getElementsByClassName('opcion')
const listaIdiomas = document.getElementById('idiomas')



// titulos
const tituloInicio = getElementById('habilidades')
const tituloAcercaDeMi = getElementById('acercaDeMi') 
const tituloHabilidades = getElementById('inicio')


// secciones de la pagina
const inicio = getElementsByClassName('boton-inicio')
const acercaDeMi = getElementsByClassName('boton-acdm')
const habilidades = getElementsByClassName('boton-habilidades')



// variables del inicio
const nombre = document.getElementById('nombre')
const profesion = document.getElementById('profesion')
const parrafo1 = document.getElementById('parrafo-inicio')

// variables acerca de mi

const portadaAcercaDeMi = document.getElementById('titulo-acdm')
const parrafoacdm1 = document.getElementById('parrafo-acdm-1')
const parrafoacdm2 = document.getElementById('parrafo-acdm-2')
const parrafoacdm3 = document.getElementById('parrafo-acdm-3')

// variables habilidades

const parrafoHabilidades = document.getElementById('parrafo-habilidades')
const advertenciaParrafo = document.getElementById('advertencia')
const habilidadesProgramacion = document.getElementById('tech')
const misIdiomas = document.getElementById('idiomasQueHablo')


// para ver si se agrega a la consola 


idiomaActual.addEventListener('click', () => {
    listaIdiomas.classList.toggle('toggle')
})


const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion) =>{
    opcion.addEventListener('click', () =>{
        const idioma = opcion.getElementsByTagName('span')[0].texContent.toLowerCase();
        
        console.log(idioma)
        // establecerIdioma(idioma)
    })
}) 