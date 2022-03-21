const fs = require('fs');

fs.readFile ('package.json', 'utf-8', (cbError, cbContenido)=> {
    //le doy formato default al string que llega leido


    if (cbError){
        console.log('error');
    } else{
        
const dataObj = {
    //ya viene el cbContenido con formato string
    contenidoString: cbContenido,
    //JSON.parse convierte string en objeto
    contenidoObj:JSON.parse(cbContenido),
    size: (cbContenido.length)
    }
    console.log(dataObj);


    //escribir objeto en archivo aparte c/string c/ formato default, 2 es el indentado-------------------------------------------------------------------------------

    fs.writeFile('info.txt', JSON.stringify(dataObj, null, 2 ), error =>{
        if (error){
            throw new Error(`Se ha detectado el error: ${error}`);
        }
        console.log('info.txt:escritura exitosa')
    })
}  
});


