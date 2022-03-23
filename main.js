function control(num1, num2){
    // Control que los datos ingresados sean numeros
    if(!isNaN(num1) && !isNaN(num2)){
        return true
    }
    return false
}

function printMenu(){
    // Imprimir menu
    console.clear()
    let option = parseInt(prompt("Bienvenidos a la Calculadora de Mierda !, por favor ingrese una de las siguientes opciones : \n1 - Suma\n2 - Resta\n3 - Multiplicacion\n4 - Division\n5 - Salir "))
    return option
}
/* -- Funcion Invalidada por Tutor --
function insert(){
    // Ingreso de valores a calcular, control y retorno de los mismos en forma de Array
    while (true){
        let num1 = parseFloat(prompt("Ingrese el primer numero a operar : "))
        let num2 = parseFloat(prompt("Ingrese el segundo numero a operar : "))
        if(control(num1, num2)){
            return [num1, num2]
        }
        console.log("Uno o ambos numeros son incorrectos, intente otra vez ... ")
        console.clear()
    }
}*/

/* -- Funcion Invalidada por Tutor --
    function operation(arrayNum, op){
    // Funcion Operacion, recibe el array de numeros y la opcion elegida. Retorna resultado de operacion.
    if(op === 1){
        return arrayNum[0]+arrayNum[1]
    }else if(op === 2){
        return arrayNum[0]-arrayNum[1]
    }else if(op === 3){
        return arrayNum[0]*arrayNum[1]
    }else if(op === 4){
        return arrayNum[0]/arrayNum[1]
    }
}
*/

function main(){
    // Funcion main
        do{
            var option = parseInt(printMenu());
            if(!isNaN(option) && option > 0 && option < 5){
                let num1 = parseFloat(prompt("Ingrese el primer numero a operar : "))
                let num2 = parseFloat(prompt("Ingrese el segundo numero a operar : "))
                if(option == 1){
                    console.log(`El resultado de la suma entre ${num1} y ${num2} es : ${num1+num2}.`);
                    alert("Presiona el boton para volver al menu.")
                    continue
                } else if(option == 2){
                    console.log(`El resultado de la resta entre ${num1} y ${num2} es : ${num1-num2}.`);
                    alert("Presiona el boton para volver al menu.")
                    continue
                } else if(option == 3){
                    console.log(`El resultado de la multiplicacion entre ${num1} y ${num2} es : ${num1*num2}.`);
                    alert("Presiona el boton para volver al menu.")
                    continue
                } else{
                    if(isFinite(num1/num2)){
                            console.log(`El resultado de la division entre ${num1} y ${num2} es : ${num1/num2}.`)
                            continue
                        } else {
                            alert("IMBECIL no se puede dividir por cero ! . \nHaz click en el boton para volver al menu.")
                            continue 
                        }
                }
            } else if(option == 5){
                alert("Saliendo de la calculadora ... APRENDE A OPERAR VOS BURRO !")
                break
            } else{
                alert("IMBECIL !. No seleccionaste una de las opciones del menu, intenta de nuevo.")
            }
        }while(option != 5);
}

// Programa
console.clear()
main()
console.log("Calculadora Apagada, Recargue la pagina o presione F5 para comenzar.")

