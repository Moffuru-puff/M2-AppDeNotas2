let fs = require('fs')

module.exports = moduloTareas = {
    leerJSON : () =>{
        let tareas = fs.readFileSync('./listaDeTareas/tareas.json', 'utf-8')
        return JSON.parse(tareas)
    },
    escribirJSON : (titulo, estado) =>{
        let nuevaTarea = {
            titulo : titulo,
            estado : estado == undefined ? "pendiente" : estado
        } 
        let tareasAnteriores = moduloTareas.leerJSON()
        tareasAnteriores.push(nuevaTarea)
        moduloTareas.guardarTarea(tareasAnteriores)

    },
    guardarTarea : (info) =>{
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync('./listaDeTareas/tareas.json', nuevoJSON, 'utf-8')
    },
    filtrarPorEstado : (estado) =>{
        let tareas = moduloTareas.leerJSON()
        moduloTareas.leerPorEstado(tareas)
        let tareasFiltradas = tareas.filter(tarea => {
            return tarea.estado.toLowerCase() === estado.toLowerCase()
        })
        return tareasFiltradas
    },
    leerPorEstado : (estado) =>{
        let leerTareas = moduloTareas.leerJSON(estado)
    }
}
