let sistema = new Sistema

// Se identifican todos los botones
let boton = document.querySelectorAll(".btn")
let clases_seleccionado = []
let precio

// Se le agrega la categoría de seleccionado al botón sobre el cual se hace click
// Se recorren todos los botones
boton.forEach((btn, num) => {

    // Se obtienen las clases del botón a evaluar
    let clases = boton[num].classList.value

    // Si el botón no es un botón primario (botón de agregar al carrito)
    if (!clases.includes("btn-primary")) {

        //Se le pondrá un border al hacer click en él
        boton[num].addEventListener("click", () => {
            let seleccionado = num

            // Se obtienen las clases del botón seleccionado
            clases_seleccionado = boton[seleccionado].classList.value

            // Se le agrega la clase de "btn-selected" al nuevo botón seleccionado
            boton[seleccionado].classList.add("btn-selected")

            // Se le quita la clase de seleccionado a los botones previamente seleccionados (con el mismo objetivo: seleccionar capacidad o color)
            unselect_other_btns(seleccionado)

            // Se obtiene la capacidad del equipo seleccionado
            let capacidad = get_capacity()

            // Se obtiene el color del equipo seleccionado
            let color = get_color()

            // Se obtiene el precio del equipo seleccionado
            precio = sistema.get_price("SE", capacidad, color)

            if(!isNaN(precio)){ // Evita mostrar el undefined que se genera cuando hace falta aún seleccionar otras características 
                // Se muestra el precio en la página
            let precio_texto = "$ " + precio
            document.querySelector(".precio").innerText = precio_texto
            }

            // Se muestra la imagen correspondiente al color seleccionado
            let imagen = document.querySelector(".img-fluid")

            switch (color) {
                case "negro":
                    imagen.src = "../assets/images/SE_Negro.webp"
                    break;
                case "rojo":
                    imagen.src = "../assets/images/SE_Rojo.webp"
                    break;
            }
        })
    }
})

// Cuando se apriete el botón, agregar al carrito, se muestra un alert notificando el evento
let boton_agregar = document.querySelector(".btn-primary")
boton_agregar.addEventListener("click", () => {
    if (isNaN(precio)){
        alert("Para poder agregar, primero debes terminar de configurar tu teléfono")
    }else{
        alert("Producto agregado al carrito")
    }
})

function get_capacity() { // Obtiene la capacidad del equipo seleccionado

    let capacidad
    let boton_capacidad = document.querySelectorAll(".btn-secondary")

    boton_capacidad.forEach((btn, num) => {
        let clases_secundario = boton_capacidad[num].classList.value
        if (clases_secundario.includes("btn-selected")) {
            capacidad = Number(boton_capacidad[num].innerText)
        }
    })
    return capacidad
}

function get_color() {  //Obtiene el color del equipo seleccionado

    let color
    let boton_color = document.querySelectorAll(".btn-color")

    boton_color.forEach((btn, num) => {
        let clases_color = boton_color[num].classList.value
        if (clases_color.includes("btn-selected")) {
            color = boton_color[num].innerText.toLowerCase()
        }
    }) 
    return color
}

function unselect_other_btns(seleccionado){ //Quita la categoría de seleccionado a los botones previamente seleccionados (con el mismo objetivo: seleccionar capacidad o color)
    // Se recorren todos los botones
    boton.forEach((btn, num) => {
        // Se obtienen las clases del botón a evaluar
        clases = boton[num].classList.value

        // Se evalua si el botón en cuestón tiene el mismo objetivo del botón seleccionado
        // Objetivo de de seleccionar capacidad
        if (clases_seleccionado.includes("btn-secondary") && clases.includes("btn-secondary")) {
            if (num != seleccionado) {
                // si tiene el mismo objetivo, se remueve la categoría de botón seleccionado
                boton[num].classList.remove("btn-selected")
            }
        }
        // Objetivo de seleccionar color
        if (clases_seleccionado.includes("btn-color") && clases.includes("btn-color")) {
            if (num != seleccionado) {
                // si tiene el mismo objetivo, se remueve la categoría de botón seleccionado
                boton[num].classList.remove("btn-selected")
            }
        }
    })
}