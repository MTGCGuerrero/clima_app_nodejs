const { leerInput, inquirerMenu, pausa} = require('./helpers/inquirer');


const main = async() => {

    const texto = await leerInput('Hola: ');

    console.log(texto);

}



main();