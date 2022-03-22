function control(num1, num2){
    if(!isNaN(num1) && !isNaN(num2)){
        return true
    }
    return false
}

function printMenu(){
    console.clear()
    console.log(" Bienvenidos a la Calculadora de Mierda ! ");
    console.log("1 - Suma");
    console.log("2 - Resta");
    console.log("3 - Multiplicacion");
    console.log("4 - Division");
    console.log("5 - Salir");
}

function main(){
    inicio : do{
        printMenu();
        var option = parseInt(prompt("Ingrese una de las opciones indicadas en la Consola : "))
        if (!isNaN(option) && 0 < option && option < 6){
            
            if(option == 1){
                while(true){
                    var num1 = parseFloat(prompt("Ingrese el primer numero a sumar : "))
                    var num2 = parseFloat(prompt("Ingrese el segundo numero a sumar : "))
                    if(control(num1, num2)){
                        alert("El resultado de la suma de los numeros es : "+ (num1+num2) +".\nHaz click en OK para volver al menu.")
                        continue inicio
                    }
                    alert("Uno o ambos numeros son incorrectos, intente otra vez ... ")
                    console.clear()
                }
            }
            else if(option == 2){
                while(true){
                    var num1 = parseFloat(prompt("Ingrese el primer numero a restar : "))
                    var num2 = parseFloat(prompt("Ingrese el segundo numero a restar : "))
                    if(control(num1, num2)){
                        alert("El resultado de la resta de los numeros es : "+ (num1-num2) +".\nHaz click en OK para volver al menu.")
                        continue inicio
                    }
                    alert("Uno o ambos numeros son incorrectos, intente otra vez ... ")
                    console.clear()
                }
            }
            else if(option == 3){
                while(true){
                    var num1 = parseFloat(prompt("Ingrese el primer numero a multiplicar : "))
                    var num2 = parseFloat(prompt("Ingrese el segundo numero a multiplicar : "))
                    if(control(num1, num2)){
                        alert("El resultado de la multiplicacion de los numeros es : "+ (num1*num2) +".\nHaz click en OK para volver al menu.")
                        continue inicio
                    }
                    alert("Uno o ambos numeros son incorrectos, intente otra vez ... ")
                    console.clear()
                }
            }
            else if(option == 4){
                while(true){
                    alert("Recuerde que el Divisor no puede ser 0 ... ")
                    var num1 = parseFloat(prompt("Ingrese el Dividendo : "))
                    var num2 = parseFloat(prompt("Ingrese el Divisor : "))
                    if((num2 > 0) && control(num1, num2)){
                        alert("El cociente de la Division de "+ num1 +" sobre "+ num2 +" es igual a : "+ (num1/num2) +".\nHaz click en OK para volver al menu.")
                        continue inicio
                    }
                    alert("Uno o ambos numeros son incorrectos, intente otra vez ... ")
                    console.clear()
                }
            }
            else{
                alert("Saliendo de Calculadora ...")
                return
            }
        }
        alert("Has elegido una opcion incorrecta, por favor intenta otra vez.")
        
    }while(option != 5);
}

main()
console.clear()
console.log("Calculadora Apagada, Recargue la pagina o presione F5 para comenzar.")

