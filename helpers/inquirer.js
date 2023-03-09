import inquirer from 'inquirer';

import colors from 'colors'; 

const menuOpts = [
    {
        type: 'list',
        name: 'opt',
        messages: 'Que deseahacer',
        choices: [
            {
                value: '1',
                name: `${'1.'.magenta} ${'Crear tarea'}`
            },
            {
                value: '2',
                name: `${'2.'.magenta} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.magenta} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.magenta} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.magenta} Completar tareas`
            },
            {
                value: '6',
                name: `${'6.'.magenta} Borrar tareas`
            },
            {
                value: '0',
                name: `${'0.'.magenta} Salir ＼n`
            }
            
        ]
    }
]

const inquirerMenu = async () => {
    //console.clear();
    console.log('====================='.bgMagenta);
    console.log('Seleccione una opcion'.bgMagenta);
    console.log('====================='.bgMagenta);

    const opt = await inquirer.prompt(menuOpts)
    console.log('OPT: ',opt)
    return opt;

}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]
    const { desc } = await inquirer.prompt(question)
    return desc;
}

const inquireListadoTarea = async (tareas = []) => {
    console.log('====================='.bgMagenta);
    console.log('Seleccione una tarea'.bgMagenta);
    console.log('====================='.bgMagenta);

    const choices = tareas.map((tarea, i)=>{return{ value: tarea.id, name: `${i.toString().magenta} ${tarea.desc}`}})

    const menuOpts = [
        {
            type: 'list',
            name: 'optId',
            messages: 'Que deseahacer',
            choices
        }
    ]
    
    const optId = await inquirer.prompt(menuOpts)
    //console.log(optId.optId)
    return optId.optId;
}

const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'confirm',
            message
        }
    ]

    const confirm = await inquirer.prompt(question);
    return confirm;
}

const inquireListadoTareaPorCompletar = async (tareas = []) => {
    console.log('====================='.bgMagenta);
    console.log('Seleccione una tarea'.bgMagenta);
    console.log('====================='.bgMagenta);

    const choices = tareas.map((tarea, i)=>{return{ value: tarea.id, name: `${i.toString().magenta} ${tarea.desc}`, checked: tarea.completadoEn?true:false}})

    const menuOpts = [
        {
            type: 'checkbox',
            name: 'optId',
            messages: 'Completar Tarea/s',
            choices
        }
    ]
    
    const optId = await inquirer.prompt(menuOpts)
    //console.log(optId.optId)
    return optId.optId;
}

export { inquirerMenu, leerInput, inquireListadoTarea, confirmar, inquireListadoTareaPorCompletar }