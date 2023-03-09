import colors from 'colors';
import { guardarDB, readDB } from './helpers/guardarArchivo.js';

import { inquirerMenu, leerInput, inquireListadoTarea, confirmar,inquireListadoTareaPorCompletar } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';


console.clear();


const main = async ()=>{
    let opt = "";
    const tareas = new Tareas();

    const tareasDB = readDB();

    if( tareasDB ){
        tareas.cargarTareasFromArray(tareasDB);
    }

    do{
        opt = await inquirerMenu(); 

        switch (opt.opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc)
            break;
            case '2':
                tareas.listadoCompleto()
            break;
            case '3':
                tareas.listadoPendientesCompletadas(true)
            break;
            case '4':
                tareas.listadoPendientesCompletadas(false)
            break;
            case '5':
                const completar = await inquireListadoTareaPorCompletar(tareas.listadoArr);
                tareas.toggleComplete(completar);
            break;
            case '6':
                const id = await inquireListadoTarea(tareas.listadoArr);
                const confirm = await confirmar('Deseas borrar tarea ');
                console.clear();
                confirm.confirm ? tareas.borrarTarea(id): console.log('=== Cancelado ===');
            break;
        }

        guardarDB( tareas.listadoArr )

    }while(opt.opt !== '0')
}


main();