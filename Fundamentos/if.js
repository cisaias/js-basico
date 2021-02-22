if(true){
    console.log("Soy Verdadero");
}else{
    console.log("Soy Falso");
}

//veamos si puede votar o no
var edad = 18;

if(edad === 18){
console.log("puedes votar, sera tu primera votacion")
}else if(edad > 18){
    console.log("Tienes mayor de 18 y ya haz votado");
}else{
    console.log("No tienes 18 años y por lo tanto aun no puedes votar");
}

//operador ternario 

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "soy un uno" : "no soy un uno";

console.log(resultado);