const fs = require ('fs');
//podria haberlo hecho en try/catch separados
//si hubiera sido un archivo pesado a leer hacerlo con readFile de async
//************************************************************************************* */

//crear un archivo, escribir dentro y leerlo en consola-------------------------------------------------------------------------
try{
    fs.writeFileSync('fyh.txt', new Date().toLocaleString());
    const data = fs.readFileSync('fyh.txt', 'utf-8');
    console.log (data);
}

//control de errores de cualquier ejecucion en try-----------------
catch(error) {
    console.log(`Se ha detectado el error: ${error}`)
}
 
//ASYNC: manejo los errores sin try/catch con callbacks, una var para "try" y una var para "catch"
