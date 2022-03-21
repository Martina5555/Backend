//-------------------------------------MANEJO DE ARCHIVOS: CONTENEDOR----------------------------------------------
const fs = require('fs');

class Contenedor{
    constructor(save, getById, getAll, deleteById, deleteAll){
        this.save = save
        this.getById = getById
        this.getAll = getAll
        this.deleteById = deleteById
        this.deleteAll = deleteAll

//recibe el objeto a guardar como parametro
        this.save = async function(objeto = {titulo: 'nombre producto', price: 25, thumbnail: 'urlFoto', id: 'id'}) {
            fs.promises.appendFile ('productos.txt', objeto, 'utf-8');
                try{
                    let i=1;
                     if(objeto.id<=i) { //quiero poner si no hay objetos dentro de productos.txt
                        objeto.id =  i
                     } else{
                         objeto.id = i++
                }
                    console.log('agregado');

                }catch(error) {
                    console.log('error de appendObj');
                    }
      
        }}
        }
    
    

module.exports = Contenedor