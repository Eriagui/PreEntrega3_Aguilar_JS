class Sistema{
    constructor(){
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
}