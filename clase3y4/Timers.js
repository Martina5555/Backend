//GENERO ESQUELETO modelo encerrando la funcion de interval con funcion mostrarLetras para pasarle despues la palabra 
//que quiera. Si defino sin mostrarLetras funciona nada mas mostrando la posicion poniendo i >=4 para que corra index hasta 4 unicamente

const mostrarLetras =(palabra)=>{
    let i =0;
const interval =setInterval(()=>{
    if (i< palabra.length){
        console.log (palabra[i]);
        i++;
    } else {
        clearInterval (interval);
        console.log ('termino');
    }
},1000)
}

mostrarLetras ('holaManola')

