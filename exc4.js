/*Crie um objeto carro com as propriedades modelo e velocidade.
Adicione um método chamado acelerar que aumenta a velocidade em 10 cada vez que é chamado. */

const carro = {
    modelo : "Fusca",
    velocidade: 0,
    acelerar: function(){
        this.velocidade += 10
    }
}
carro.acelerar()
console.log("a velocidade do carro é", carro.velocidade , "km/h")