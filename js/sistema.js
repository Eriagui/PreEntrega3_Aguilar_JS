class Sistema {
    constructor() {
        this.productos = [
            new Iphone("SE", 64, "negro", 10499),
            new Iphone("SE", 128, "negro", 11499),
            new Iphone("SE", 64, "rojo", 10499),
            new Iphone("SE", 128, "rojo", 11499)
        ]

        this.usuarios = [
            new Usuario("PEPE", "ElPepe"),
            new Usuario("Maria", "Maria123")
        ]
    }

    get_price (modelo, capacidad, color) {
        let precio_producto
        this.productos.forEach((prod, num) => {
            let modelo_producto = this.productos[num].modelo
            let capacidad_producto = sistema.productos[num].capacidad
            let color_producto = sistema.productos[num].color.toLowerCase()
            if (modelo_producto == modelo && capacidad_producto == capacidad && color_producto == color) {
                precio_producto = sistema.productos[num].precio
            }
        })
        return precio_producto
    }
}