window.onload = function GenContrasena(){
    let cantidad = 8;
    
    var cantidadreal = document.getElementById("cantidad");
    var password = document.getElementById("contrasena");

    var boton = document.getElementById("generar");
    let limpiar = document.getElementById("limpiar");
    let validar = document.getElementById("validar");

    const cadena = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    //26, 0-25
    //52, 26-51
    //10, 52-61
    //94, 62-93
    let contrasena ='';
    let medir = false;
    
    boton.addEventListener("click", generarC);
    limpiar.addEventListener("click", limpieza);
    validar.addEventListener("click", validacion);


    function limpieza(){
        password.value = '';
        contrasena='';
    }

    function generarC(){
        let numeroCantidad = parseInt (cantidadreal.value) || 0; // Mostrará 0 si cantidadreal.value está vacío
        if(medir){
            contrasena='';
        }
        if(numeroCantidad<=0){
            alert("Digite una cantidad válida de caracteres");
        }else if(numeroCantidad<cantidad){
                alert("La cantidad de caracteres debe ser mayor a "+cantidad);
                }else{
                
                    for(let i=0;i<numeroCantidad;i++){
                    //Math random da un numero entre 1 y 0. math floor lo redondea
                    let pos= Math.floor(Math.random()*cadena.length);;
                    let aleatorio = cadena[pos];
                    contrasena = contrasena+aleatorio;  
                }
                    console.log(contrasena);
                    password.value = contrasena;
                    medir=true;
            }
        
    }

    function validacion(){
        let PASS = password.value;
        let puntos=0;
        // Expresiones regulares para cada tipo de carácter
        const mayus = /[A-Z]/;
        const minus = /[a-z]/;
        const num = /[0-9]/;
        const especial = /[^A-Za-z0-9]/; // Cualquier cosa que no sea letra o número
        if(mayus.test(PASS)){
            puntos++;
        }
        if(minus.test(PASS)){
            puntos++;
        }
        if(num.test(PASS)){
            puntos++;
        }
        if(especial.test(PASS)){
            puntos++;
        }

        if(PASS.length<cantidad && puntos>0){
            alert("La cantidad de caracteres debe ser mayor a "+cantidad);
        }else if(puntos===4){
            alert("Tu contraseña es muy segura");
        }else if(puntos===3){
            alert("Tu contraseña es segura");
        }else if(puntos===2){
            alert("Tu contraseña es poco segura, prueba con otra");
        }else if(puntos===1){
            alert("Tu contraseña NO es segura, prueba con otra");
        }else alert("Debe haber un valor ingresado");
        console.log(puntos);
    }
}

    








