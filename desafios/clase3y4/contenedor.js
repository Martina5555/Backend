//-------------------------------------MANEJO DE ARCHIVOS: CONTENEDOR----------------------------------------------
const fs = require('fs');

class Contenedor{
    constructor(fileName){
        this.fileName = fileName
    }

//recibe el objeto a guardar como parametro
    save = async function(objeto = {titulo: 'nombre producto', price: 25, thumbnail: 'urlFoto', id: 'id'}) {
        fs.promises.appendFile ('productos.txt', objeto, 'utf-8');
            try{
                let i = objeto.id
                    if(this.fileName.objeto.id>=1) { //quiero poner si no hay objetos dentro de productos.txt
                    objeto.id = 1
                    } else{
                        objeto.id =+ 1
                    }
                        console.log(`agregado, id: ${objeto.id}`);

            }catch(error) {
                console.log('error de appendObj');
            }
        }

    
    getById = async function (numeroID){
        try {
            const contenido = await fs.promises.readFile('productos.txt', 'utf-8');
            const found = contenido.find(objeto=>objeto.id === numeroID); //tambien podria ser con filter
                console.log(found);
       
        } catch{
            console.log (null);
        }
    }
    
    getAll = async function (){
        try {
            const contenido = await fs.promises.readFile('productos.txt', 'utf-8');
                console.log([contenido.objeto]); //o solo ([contenido])
       
        } catch{
            console.log (null);
        }
    }

    deleteById = async function (numeroID){
        try {
            const contenido = await fs.promises.readFile('productos.txt', 'utf-8');
            const index = numeroID - 1 //con esto saco la posicion i dentro del array de objetos ya que antes a numeroId le cancelo la posicion 0
            const cortar = contenido.splice(index)
            
        } catch{
            console.log (null);
        }
    }

    deleteAll = async function (){ //--------------FUNCIONA---------------
        try {
            await fs.promises.writeFile('productos.txt', '');
            console.log ('archivo limpiado con exito');
        } catch{
            console.log ('no pudo completarse el vaciado del archivo');
        }
    }

}
    

module.exports = Contenedor