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

function insert(){
    // Ingreso de valores a calcular, control y retorno de los mismos en forma de Array
    while (true){
        let num1 = parseFloat(prompt("Ingrese el primer numero a operar : "))
        let num2 = parseFloat(prompt("Ingrese el segundo numero a operar : "))
        console.clear()
        if(control(num1, num2)){
            return [num1, num2]
        }
        console.log("Uno o ambos numeros son incorrectos, intente otra vez ... ")
    }
}

function print(arrayNum, res, op){
    // Imprime el resultado de la operacion y envia alerta para volver al menu
    console.log(`El resultado de la ${op} entre ${arrayNum[0]} y ${arrayNum[1]} es : ${res}`)
    alert("Presiona el boton para volver al menu.")
}


function operation(arrayNum, option, op){
    // Funcion Operacion, recibe el array de numeros y la opcion elegida. Retorna resultado de operacion.
    if(option === 1){
        print(arrayNum, arrayNum[0]+arrayNum[1], op)
        return 
    }else if(option === 2){
        print(arrayNum, arrayNum[0]-arrayNum[1], op)
        return 
    }else if(option === 3){
        print(arrayNum, arrayNum[0]*arrayNum[1], op)
        return
    }else if(option === 4){
        print(arrayNum, arrayNum[0]/arrayNum[1], op)
        return
    }return undefined
}


function main(){
    // Funcion main
        do{
            //delete option
            let option = printMenu();
            if(!isNaN(option) && option > 0 && option < 5){
                let op = ["suma", "resta", "multiplicacion", "division"]
                let arrayNum = insert()
                if(option == 1){
                    operation(arrayNum, option, op[0])
                    continue
                } else if(option == 2){
                    operation(arrayNum, option, op[1])
                    continue
                } else if(option == 3){
                    operation(arrayNum, option, op[2])
                    continue
                } else{
                    if(isFinite(arrayNum[0]/arrayNum[1])){
                        operation(arrayNum, option, op[3])
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
        }while(option !== 5);
}

// Programa
console.clear()
main()
console.log("Calculadora Apagada, Recargue la pagina o presione F5 para comenzar.")

