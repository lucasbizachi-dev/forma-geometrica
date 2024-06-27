class FormaGeometrica {
    constructor(nome) {
        this.nome
    }

    area() {
        console.log("Área não definida");
    }

}

class Retangulo extends FormaGeometrica {
    constructor(base, altura) {
        super('Retângulo');
        this.base = base;
        this.altura = altura;
    }

    area() {
        return this.base * this.altura;
    }

}
 let retangulo = new Retangulo(6, 4);
 console.log("Área do retângulo: ", retangulo.area());