const { info } = require('console');
const fs = require ('fs');

async function readFileAsync(){
    try{
        const contenido = await fs.promises.readFile('info.txt', 'utf-8');

        const objInfo = JSON.parse(contenido) 
        console.log (objInfo)
        
        //accedo a la propiedad del Objeto contenidoObj y la defino
        objInfo.contenidoObj.author = 'coderhouse';
        console.log (objInfo)
        await fs.promises.writeFile('package.json.coder', JSON.stringify(objInfo, null, 2));
    } catch(error){
        console.log(error);
    }
}

readFileAsync()