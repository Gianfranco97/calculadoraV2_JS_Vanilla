var operacion, 
    ultima_operacion = '=',
    numero_guardado = 0,
    remplazar = true;

function llamar_pantalla(){
    return (Number(document.getElementById("pantalla").value));
}

function escribir_pantalla(pantalla){
    document.getElementById("pantalla").value = pantalla; 
}

function introducir_numero(numero){
    pantalla = llamar_pantalla();
    if(pantalla == 0 || remplazar == true){
        pantalla = numero;
    } else{
        pantalla += numero;   
    }
    escribir_pantalla(pantalla);
    remplazar = false;
} 

function operaciones(operacion){
    pantalla = llamar_pantalla();
    switch(operacion){
        case '+':
            if(ultima_operacion != "="){
                numero_guardado = numero_guardado + pantalla;
            }else{
                numero_guardado = pantalla;
            }
            escribir_pantalla(numero_guardado);
            break;
        case '-':
            if(ultima_operacion != "="){
                numero_guardado = numero_guardado - pantalla;
            }else{
                numero_guardado = pantalla;
            }
            escribir_pantalla(numero_guardado);
            break;
        case '*':
            if(ultima_operacion != "="){
                numero_guardado = numero_guardado * pantalla;
            }else{
                numero_guardado = pantalla;
            }
            escribir_pantalla(numero_guardado);
            break;
        case '/':
            if(ultima_operacion != "="){
                numero_guardado = numero_guardado / pantalla;
            }else{
                numero_guardado = pantalla;
            }
            escribir_pantalla(numero_guardado);
            break;
        case '=':
            if(ultima_operacion != '='){
                operaciones(ultima_operacion);
            }else{
                escribir_pantalla(llamar_pantalla());
            }
            numero_guardado = 0;
            break;
    }
    ultima_operacion = operacion;
    remplazar = true;
}
