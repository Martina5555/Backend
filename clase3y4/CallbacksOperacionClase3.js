//probar con  consola cuando pueda

//el profe no le puso el console.log al modelo sino a cada ejecucion del codigo con cada callback; 
//el definio asi: operacion=(valor1,valor2, callbackOperacion)=>callbackOperacion(valor1,valor2);


//creando el esqueleto modelo de la funcion con callback-------------------------------
const operacion =(valor1, valor2, callbackOperacion)=>{
console.log(callbackOperacion(valor1, valor2));
}

//cada una de las operaciones son callbacks ----------
const suma =(valor1, valor2)=>{
    return valor1 + valor2
}

const resta =(valor1, valor2)=>{
    return valor1 - valor2    
}

const multiplicacion =(valor1, valor2)=>{
    return valor1 * valor2
}

const division =(valor1, valor2)=>{
    return valor1 / valor2
}
 
//dando valor al esqueleto modelo de la funcion con callback----------------------------
 operacion(suma(1,2), resta(1,2), multiplicacion(1,2), division(1,2))
