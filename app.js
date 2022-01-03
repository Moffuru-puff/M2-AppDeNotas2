let moduloTareas = require('./tareas')
let process = require('process')
let comando = process.argv[2] 
let titulo = process.argv[3]
let estado = process.argv[4] 

switch(comando){
    case "listar":
        let listaDeTareas = moduloTareas.leerJSON()
        if(listaDeTareas.length === 0){
            console.log("---La lista se encuentra vacia---")
        }else{
            listaDeTareas.forEach(tarea => {
                console.log(`titulo: ${tarea.titulo} - estado: ${tarea.estado}`)
            })
        }
        break;
    case "crear": 
        if(!titulo){
            console.log(">Debes escribir un titulo<")
        }else{
            moduloTareas.escribirJSON(titulo, estado)
            console.log("---La tarea ha sido agregada---")
        }
        break;
    case "filtrar":
        let filtrarEstado = process.argv[3]
        let tareasFiltradas = moduloTareas.filtrarPorEstado(filtrarEstado)
        if(tareasFiltradas.length === 0){
            console.log("---No se encontraron coincidencias---")
        }else{
            for (let tarea of tareasFiltradas) { // en esta parte me tarde 2 horas por que queria hacerlo con un for-of y me enviaba las tareas titulo undefined y estado undefined, fui a comprar, volvi, me sente y ahi me di cuenta del error que puse tareas of tareasFiltradas en vez de tarea 
                console.log(`titulo: ${tarea.titulo} - estado: ${tarea.estado}`)
            }
        }
        break;
    case undefined:
        console.log("Atencion - tienes que pasar una accion")
        break;
    default:
        console.log("No entiendo que quieres hacer")
}
