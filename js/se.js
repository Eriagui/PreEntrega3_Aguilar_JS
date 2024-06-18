let sistema = new Sistema

// Se identifican todos los botones
let boton = document.querySelectorAll(".btn")
let clases_seleccionado = []

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
            // Se le agrega la clase de "btn-selected" al botón seleccionado
            boton[seleccionado].classList.add("btn-selected")
            
            // Se le quita la categoría de seleccionado a los botones previamente seleccionados (con el mismo objetivo: seleccionar capacidad o color)
            // Se recorren todos los botones
            boton.forEach((btn, num) => {
                // Se obtienen las clases del botón a evaluar
                clases = boton[num].classList.value

                // Se evalua si el botón en cuestón tiene el mismo objetivo del botón seleccionado
                // Objetivo de de seleccionar capacidad
                if (clases_seleccionado.includes("btn-secondary") && clases.includes("btn-secondary")) {
                    if (num != seleccionado) {
                        boton[num].classList.remove("btn-selected")
                    }
                }
                // Objetivo de seleccionar color
                if (clases_seleccionado.includes("btn-color") && clases.includes("btn-color")) {
                    if (num != seleccionado) {
                        boton[num].classList.remove("btn-selected")
                    }
                }
            })

            // Se obtiene la capacidad del equipo seleccionado
            let capacidad
            let boton_capacidad = document.querySelectorAll(".btn-secondary")
            boton_capacidad.forEach((btn, num) => {
                let clases_secundario = boton_capacidad[num].classList.value
                if (clases_secundario.includes("btn-selected")){
                    capacidad = Number(boton_capacidad[num].innerText)
                }
            })

            // Se obtiene el color del equipo seleccionado
            let color
            let boton_color = document.querySelectorAll(".btn-color")
            boton_color.forEach((btn, num) => {
                let clases_color = boton_color[num].classList.value
                if (clases_color.includes("btn-selected")){
                    color = boton_color[num].innerText.toLowerCase()
                }
            })

            // Esto parece que podría ser un método del sistema
            sistema.productos.forEach((prod, num) => {
                let modelo_producto = "SE"
                let capacidad_producto = sistema.productos[num].capacidad
                let color_producto = sistema.productos[num].color.toLowerCase()
                if(modelo_producto == "SE" && capacidad_producto == capacidad && color_producto == color){
                    document.querySelector(".precio").innerText = sistema.productos[num].precio
                }
            })

            let imagen = document.querySelector(".img-fluid")
            
            switch (color) {
                case "negro":
                    imagen.src="../assets/images/SE_Negro.webp"
                    console.log("imagen cambiada a negro")
                    break;
                case "rojo":
                    imagen.src="../assets/images/SE_Rojo.webp"
                    console.log("imagen cambiada a rojo")
                    break;
            }
            
        })
    }
})

let boton_agregar = document.querySelector(".btn-primary")

boton_agregar.addEventListener("click", ()=>{
    alert("Producto agregado al carrito")
})