// Declaracion del constructor de Objetos
function Product(id, name, size, colors, category, price, discount){
    this.id = id;
    this.name = name;
    this.size = size;
    this.colors = colors;
    this.category = category;
    this.price = price;
    this.discount = discount;
    this.salePrice = (sale) => {if(discount != false){return (this.price - (this.price * this.discount / 100))}return false}
}

//Creacion de un array de String con colores (retorna False si no se valido anteriormente el parametro de entrada)
function createColors(num){
        let colors = [];
        for(let i = 1; i <= num; i++){
            while(colors.length < i){
                colors.push(repeat(stringControl(prompt("Ingrese un color : "))))
                if(colors[i-1] === false){
                    console.clear()
                    console.log("Valor incorrecto, intente nuevamente.")
                    colors = colors.slice(0, -1)
                }
            }
        }
        return colors
}

// Funcion Control String (no numero)
function stringControl(val){
    if(!isNaN(parseInt(val))){
        return false
    }return val
}

//Funcion control del numero de opciones
function optionControl(num){
    if(intControl(num) && num < 7){
        return num
    }
    return false
}

//Funcion control de Numeros
function intControl(num){
        if(!isNaN(num) && num > 0){
            return num
        }
        return false
}

// Funcion que muestra array de productos
function showProducts(array){
    if(array.length > 0){
        array.forEach(product => {
            showProduct(product)
        });
    }else{
        console.log("No hay productos cargados aun.")
    }
}

// Funcion que muestra un producto.
function showProduct(object){
    console.log(`ID : ${object.id}`)
    console.log(`Nombre : ${object.name}`)
    console.log(`Talle : ${object.size}`)
    console.log(`Colores : ${object.colors}`)
    console.log(`Categoria : ${object.category}`)
    console.log(`Precio Real : ${object.price}`)
    console.log(`Descuento : ${object.discount}`)
    console.log(`Precio descuento : ${object.salePrice()}`)
    console.log("------------------------------------------")
}

//Funcion cargar producto/s
function addProducts(products, numProducts){
    numProducts = numProducts + products.length
    let categories = ["corpiño", "tanga", "colaless", "bikini", "lenceria", "accesorio"]
    while(numProducts != false && numProducts > products.length){
        let id = repeat(intControl(parseInt(prompt("Ingrese el ID del producto"))))
        let name = prompt("Ingrese el Nombre del Producto : ")
        let size = repeat(intControl(parseInt(prompt("Ingrese el talle del producto"))))
        let colors = createColors(repeat(intControl(parseInt(prompt("Ingrese la cantidad de Colores que el producto va a tener : ")))))
        console.clear()
        for(let i = 0; i < categories.length; i++){
            console.log(`${i+1} - ${categories[i]}`)
        }
        let category = categories[optionControl(parseInt(prompt("Ingrese una de las siguientes categorias mostradas en consola : ")))]
        let price = repeat(intControl(parseInt(prompt("Ingrese el precio del producto"))))
        let discount = repeat(intControl(parseInt(prompt("Ingrese el porcentaje de descuento del producto . Si no posee, ingrese cualquier otro valor que no sea un numero mayor a 0."))))
        let product = new Product(id, name, size, colors, category, price, discount)
        products.push(product)
        console.clear()
        console.log("Se ha creado el siguiente Producto : ")
        showProduct(product)
        alert("Presione para continuar.")
        console.clear()
    }
    return products
}

//Funcion Borrar producto/s de array segun id
function deleteProduct(val, products){
    let array = products.filter(product => product.id !== val)
    return array
}

//Funcion Buscar productos de array segun nombre
function searchProduct(val, products){
    let array = products.filter(product => product.name === val)
    return array
}

// Problema !! (Intento de Funcion recursiva generica para todas las funciones de control)
function repeat(fun){
    let value = false
    while(value === false){
        console.log("Prueba fun 1")
        value = fun
        console.log("Prueba fun 2")
        if(value === false){
            console.log("El valor ingresado es incorrecto, intenta de nuevo por favor ...")
        }else{
            return value
        }
    }
}

//Funcion Imprimir menu
function printMenu(){
    console.log("Bienvenido ! Selecciona una de las siguientes opciones para continuar.");
    console.log("1 - Cargar uno o mas productos")
    console.log("2 - Mostrar todos los productos")
    console.log("3 - Ordenar los productos segun precio")
    console.log("4 - Borrar uno o mas productos por ID")
    console.log("5 - Buscar productos por Nombre.")
    console.log("6 - Salir")
}

//Funcion main
function main(){
    let option = 0
    let products = []
    while(option != 6){
        console.clear()
        printMenu()
        option = optionControl(parseInt(prompt("Ingresa una de las opciones listadas : ")))
        if(option === 1){
            console.clear()
            let numProducts = intControl(parseInt(prompt("Ingresa la cantidad de productos a ingresar : ")))
            products = addProducts(products, numProducts)
        }else if(option === 2){
            console.clear()
            showProducts(products)
            alert("Presione el Boton para volver al menu.")
        }else if(option === 3){
            products.sort((a, b) => {return a.price - b.price})
            alert("Productos ordenados, utilize la opcion 2 para controlar.")
        }else if(option === 4){
            console.clear()
            console.log("Estos son los productos cargados hasta el momento : ")
            showProducts(products)
            let length = products.length
            let id = repeat(intControl(parseInt(prompt("Ingrese el ID de el/los producto/s a eliminar : "))))
            products = deleteProduct(id, products)
            if(length === products.length){
                alert("No se han encontrado Productos que coincidan con el ID mencionado. Volviendo al menu ...")
            }else{
                alert(`Se han borrado ${length-products.length} productos. Volviendo al menu ...`)
            }
        }else if(option === 5){
            let name = stringControl(prompt("Ingrese el nombre de el/los producto/s a buscar : "))
            let search = searchProduct(name, products)
            if(search.length > 0){
                console.clear()
                console.log("Los productos que coinciden con el Nombre son los siguientes : ")
                showProducts(search)
                alert("Presione el Boton para volver al menu.")
            }else{
                alert("No se han encontrado productos que coincidan con el nombre. Volviendo al menu ...")
            }
        }else if(option === 6){
            alert("Saliendo de la aplicacion ...")
            break
        }else{
            console.log("El valor ingresado es incorrecto.");
        }
        
    }

}

//Programa
printMenu()
main()