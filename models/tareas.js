import { Tarea } from "./tarea.js";

class Tareas {
    _listado = [];

    constructor(){
        this._listado = [];
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    cargarTareasFromArray(tareas = []){

        //this._listado[tarea.id] = tarea;

        tareas.forEach(tarea=>{
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        //onsole.log(this.listadoArr)
        this.listadoArr.forEach((tarea,index) => console.log(
            `${(index+1).toString().green} ${(tarea.desc)} :: ${tarea.completadoEn ? 'Completada'.green : 'Pendiente'.red }`
        ))
    }

    listadoPendientesCompletadas(completado) {
        if(completado){
            console.log('TAREAS COMPLETADAS: ')
        }else{
            console.log('TAREAS PENDIENTES: ') 
        }
        this.listadoArr.forEach((tarea,index) => {
            if (completado == true && tarea.completadoEn ){
                console.log(
                    `${(index+1).toString().green} ${(tarea.desc)} :: ${tarea.completadoEn ? 'Completada'.green : 'Pendiente'.red } :: Fecha completada: ${tarea.completadoEn}`   
                )
            }
            // console.log(completado)
            // console.log(tarea)
            // console.log(tarea.completadoEn)
            // console.log(tarea.completadoEn == null)
            if(completado == false && tarea.completadoEn == null){
                console.log(
                    `${(index+1).toString().green} ${(tarea.desc)} :: ${tarea.completadoEn ? 'Completada'.green : 'Pendiente'.red }`   
                )
            }
        })
    }

    borrarTarea(id) {
        if(this._listado[id]){
            delete this._listado[id];
            console.log(' === Borrado ===');
        }
    }

    toggleComplete(ids = []){
        // ids.forEach(id=>{
        //     const tarea = this._listado[id];
        //     if(!tarea.completadoEn){
        //         tarea.completadoEn = new Date().toISOString()
        //     }
        // })

        this.listadoArr.forEach(tarea => {
            console.log(this._listado)
            if(!tarea.completadoEn && ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = new Date().toISOString();
            }
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null
            }
        })


    }
}

export { Tareas };

//exelencia = rendimiento en forma regular. 
