class Sistema {
    constructor() {
        this.productos = [
            new Iphone("SE", 64,  "negro", 10499, 10),
            new Iphone("SE", 128, "negro", 11499, 10),
            new Iphone("SE", 64,  "rojo", 10499, 10),
            new Iphone("SE", 128, "rojo", 11499, 10),
            new Iphone("12", 64,  "negro", 11499, 10),
            new Iphone("12", 128, "negro", 13499, 10),
            new Iphone("13", 128, "azul", 14499, 10),
            new Iphone("13", 256, "azul", 16499, 10),
            new Iphone("13", 128, "azul media noche", 14499, 10),
            new Iphone("13", 256, "azul media noche", 16499, 10),
            new Iphone("13", 128, "rojo", 14499, 10),
            new Iphone("13", 256, "rojo", 16499, 10),
            new Iphone("14", 128, "rojo", 16999, 10),
            new Iphone("14", 256, "amarillo", 18999, 10),
            new Iphone("15", 128, "amarillo", 19499, 10),
            new Iphone("15", 256, "azul", 21499, 10),
            new Iphone("15", 512, "negro", 25999, 10),
            new Iphone("15 Plus", 128, "amarillo", 21999, 10),
            new Iphone("15 Plus", 256, "azul", 23999, 10),
            new Iphone("15 Plus", 512, "negro", 28499, 10),
            new Iphone("15 Pro", 128, "blanco", 23999, 10),
            new Iphone("15 Pro", 256, "natural", 25999, 10),
            new Iphone("15 Pro", 512, "negro", 30499, 10),
            new Iphone("15 Pro", 1000, "azul", 34999, 10),
            new Iphone("15 Pro Max", 256, "natural", 28999, 10),
            new Iphone("15 Pro Max", 512, "negro", 33499, 10),
            new Iphone("15 Pro Max", 1000, "blanco", 37999, 10),
        ]

        this.usuarios = [
            new Usuario("PEPE", "ElPepe"),
            new Usuario("Maria", "Maria123")
        ]

        this.carrito = []
    }
}