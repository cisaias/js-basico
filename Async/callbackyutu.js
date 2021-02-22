

function funcion1(callback){
    setTimeout(function() {
        console.log("primer comentario");
        callback();
    }, 1000);

}

function funcion2(){
    console.log("terminado")
}
funcion1(funcion2);