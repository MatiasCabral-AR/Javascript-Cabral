// Declaracion del constructor de Objetos
function Product(name, size, colors, category, price, discount){
    this.name = name;
    this.size = size;
    this.colors = colors;
    this.category = category;
    this.price = price;
    this.discount = discount;
    this.salePrice = (sale) => {this.price - (this.price * this.sale / 100)}
}

// Creacion del Objeto si y solo si, todos los valores internos son validos (retorna False en caso de no cumplirse dicha condicion)
function createProduct(name, size, colors, category, price, discount){
    if(name && size && colors && category && price && discount){
        return new Product(name, size, colors, category, price, discount);
    }
    return false
}

//Creacion de un array de String con colores (retorna False si no se valido anteriormente el parametro de entrada)
function createColors(num){
    if(num != false){
        let colors = [];
        for(let i = 1; i <= num; i++){
            while(colors.length() < i){
                colors.push(stringControl(prompt("Ingrese un color : ")))
                if(colors[i-1] === false){
                    console.clear()
                    console.log("Valor incorrecto, intente nuevamente.")
                    colors = colors.slice(0, -1)
                }
            }
        }
        return colors
    }
    return false
}

//Funcion control del numero de opciones
function optionControl(num){
    if(intControl(num) && num < 7){
        return num
    }
    return false
}

//Funcion control de Strings
function stringControl(str){
    if (typeof str === "string"){
        return str
    }
    return false
}

//Funcion control de Numeros
function intControl(num){
        if(!isNaN(num) && num > 0){
            return num
        }
        console.log("El valor ingresado es incorrecto.");
        return false
}

// Problema !! (Intento de Funcion recursiva generica para todas las funciones de control)
function repeat(value, fun){
    if(value === false){
        console.log("Intenta otra vez ...")
        while(value === false){
            let value = fun // Funciona asi ?
            return value
        }
    }
}

//Funcion Imprimir menu
function printMenu(){
    console.log("Bienvenido ! Selecciona una de las siguientes opciones para continuar.");
    console.log("1 - Cargar uno o mas productos")
    console.log("2 - Borrar uno o mas productos")
    console.log("3 - Mostrar todos los productos")
    console.log("4 - Buscar un producto por Nombre.")
    console.log("5 - Filtrar productos por categoria.")
    console.log("6 - Salir")
}

//Funcion main
function main(){
    printMenu()
    let option = 0
    let products = []
    while(option != 6){
        option = optionControl(parseInt(prompt("Ingresa una de las opciones listadas : ")))
        if(option === 1){
            let numProducts = intControl(parseInt(prompt("Ingresa la cantidad de productos a ingresar : ")))
            while(numProducts != false && numProducts >= products.length()){
                let name = stringControl(prompt("Ingrese el nombre del producto : "))
                let size = intControl(parseInt(prompt("Ingrese el talle del producto : ")))
                let colors = createColors(intControl(parseInt(prompt("Ingrese la cantidad de Colores que el producto va a tener : "))))
            }
        }
        console.log("El valor ingresado es incorrecto.")
    }

}

//Programa
main()