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
        if(control(num1, num2)){
            return [num1, num2]
        }
        console.log("Uno o ambos numeros son incorrectos, intente otra vez ... ")
        console.clear()
    }
}

function operation(arrayNum, op){
    // Funcion Operacion, recibe el array de numeros y la opcion elegida. Retorna resultado de operacion.
    if(op === "sum"){
        return arrayNum[0]+arrayNum[1]
    }else if(op === "res"){
        return arrayNum[0]-arrayNum[1]
    }else if(op === "mult"){
        return arrayNum[0]*arrayNum[1]
    }else if(op === "div"){
        return arrayNum[0]/arrayNum[1]
    }
}

function main(){
inicio :do{
        let option = parseInt(printMenu());
        if(!isNaN(option) && 0 < option && option < 6){
            let arrayNum = insert()
            let result = operation(arrayNum, option)
            switch(option){
                case 1 :console.log(`El resultado de la suma entre '${arrayNum[0]} y ${arrayNum[1]} es : ${result}.`);
                        alert("Presiona el boton para volver al menu.")
                        continue inicio
                case 2 :console.log(`El resultado de la resta entre '${arrayNum[0]} y ${arrayNum[1]} es : ${result}.`);
                        alert("Presiona el boton para volver al menu.")
                        continue inicio
                case 3 :console.log(`El resultado de la multiplicacion entre '${arrayNum[0]} y ${arrayNum[1]} es : ${result}.`);
                        alert("Presiona el boton para volver al menu.")
                        continue inicio
                case 4 :if(isFinite(result)){
                            console.log(`El resultado de la division entre '${arrayNum[0]} y ${arrayNum[1]} es : ${result}.`)
                        }
                        alert("ERROR : No se puede dividir por cero. \nHaz click en el boton para volver al menu.")
                        continue inicio
            }
        }
        alert("Has elegido una opcion incorrecta, por favor intenta otra vez.")   
    }while(option != 5);
}

console.clear()
main()
console.log("Calculadora Apagada, Recargue la pagina o presione F5 para comenzar.")

