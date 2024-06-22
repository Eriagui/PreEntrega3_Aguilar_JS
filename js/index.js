let sistema_inicial = new Sistema
let sistema_guardado = JSON.parse(localStorage.getItem("saved_system"))
//Si en el local storage no hay un sistema guardado, entonces se toma el que se tiene en el archivo sistema
//Para eso nos ayudamos del operador Nullish
let sistema = sistema_guardado ?? sistema_inicial

let modelo = ["SE", "12", "13", "14", "15", "15 Plus", "15 Pro", "15 Pro Max"]
let tag = ["#precio_SE", "#precio_12", "#precio_13", "#precio_14", "#precio_15", "#precio_15_Plus", "#precio_15_Pro", "#precio_15_Pro_Max"]

modelo.forEach((elm, num) => {
    console.log(elm, num)
    write_price(elm, tag[num])
})

function write_price(modelo, tag) {
    //Se obtiene un arreglo del modelo de interés
    console.log("el modelo buscado es " + modelo)
    let modelo_encontrado = sistema.productos.filter((elm) => elm.modelo == modelo)
    console.log(modelo_encontrado)
    // Se ordena en función a su precio en forma ascendente
    modelo_encontrado.sort((a, b) => a.precio - b.precio)

    // El primer elemento es el de menor precio
    let precio = modelo_encontrado[0].precio
    // Se coloca el precio en el lugar correspondiente
    console.log(tag)
    document.querySelector(tag).innerText = "Desde $ " + precio
}




//Hacerla función.  Pasar el modelo y el id donde va
//Se obtiene un arreglo del modelo de interés
//let SE = sistema.productos.filter((elm) => elm.modelo == "SE" )
//Se ordena de menor a mayor precio
//SE.sort((a,b) => a.precio - b.precio)
//let precio = SE[0].precio
//document.querySelector("#precio_SE").innerText = "Desde $ " + precio