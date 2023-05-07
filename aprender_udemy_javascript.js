const temperaturaKevin = 300
const temperaturaCelsius = 0

function converterTemperatura (temperaturaCelsius) {
    temperaturaCelsius = temperaturaKevin - 273
    return temperaturaCelsius 
}

console.log(` A temperatura de ${temperaturaKevin} Kevin vira ${converterTemperatura(temperaturaCelsius)}  em Celsius  `)


// 2 - IMC 

const altura = 2.00
const peso = 90

function calcularIMC (altura, peso) {
    return (peso / ( altura * altura )).toFixed(2) 
}

const imc = calcularIMC(altura, peso)

console.log(` O imc de ${altura} e ${peso} é ${imc} `)

// 3 - Receber dados 

const nome = prompt("Digite o nome ")
const idade = prompt("Digite idade")

console.log(`${nome} tem ${idade} anos`)

// OU 

function dados (nome, idade) {
    return `Olá, me chamo ${nome} e tenho ${idade} anos`
}

const mensagemFinal = dados(nome, idade)

console.log(mensagemFinal)

// 4 - Calculo area e perimetro


const lado = prompt("Digite o valor")

function fazCalculoArea (lado) {
    return parseInt(lado) * parseInt(lado)
}

function fazCalculoPerimetro (lado){
    return parseInt(lado) + parseInt(lado)
}

const mensagemDosCalculos = `Fiz os calculos e deram ${fazCalculoArea(lado)} e tambe ${fazCalculoPerimetro(lado)}`

console.log(mensagemDosCalculos)


//5 - Divisiveis 

const numero = 10
const divisor1 = 2
const divisor2 = 3
const ultimoDivisor = prompt("Digite um numero")

function primeiroDivisor (numero) {
    return numero % divisor1 
}

function segundoDivisor (numero) {
    return numero % divisor2
}

function ultimaDivisao (numero) {
    return numero % ultimoDivisor
}

const mensagemDosDivisores = `O resultado da primeira divisão é ${segundoDivisor(numero)}  e o da segunda divisão é ${primeiroDivisor(numero)}, já da ultima divisão é ${ultimaDivisao(numero)}`

console.log(mensagemDosDivisores)


// 5 - Segunda Forma usando o ternario 

const numeroA = 12
const numeroB = 4
const numeroC = 5

function verificarDivisivel (n1, n2) {
    return n1 % n2 === 0
}

const seEhDivisivel = verificarDivisivel(numeroA, numeroB)
const seEhDivisivel2 = verificarDivisivel(numeroA, numeroC)

const aplicarCalculo1 = `Verificamos que ${numeroA} dividido por ${numeroB} impica ${seEhDivisivel ? "sim" : "nao"} divisivel`
const aplicarCalculo2 = `Verificamos que ${numeroA} dividido por ${numeroC} implica ${seEhDivisivel2 ? "sim" : "nao"} divisivel `

console.log(aplicarCalculo1, "e", aplicarCalculo2)


// 6 - Classificar idade 

const valorIdade = prompt("Digite a idade: ")

function permiteIdade (valorIdade) {
    if (valorIdade < 12  ) {
        return "Criança"
    } else if (valorIdade > 12 && valorIdade <= 17) {
        return "Adolescente" 
    } else if (valorIdade > 18 && valorIdade < 59) {
        return "Adulto"
    } else {
        return "Idoso"
    }
}

const classificaIdade = permiteIdade(valorIdade)

console.log(`A classificação da faixa etária é: ${classificaIdade}`)

// 7 - Classificação de numeros 

const v1 = parseInt(prompt("Digite o primeiro numero: "))
const v2 = parseInt(prompt("Digite o segundo numero: "))

function comparaNumeros (v1, v2) {
    if (v1 > v2) {
        return `${v1} é maior que ${v2}`
    } else {
        return `${v2} é maior que ${v1}`
    }
}

const comparacao = comparaNumeros(v1, v2)

console.log( ` Na relação entre os numeros ${v1} e ${v2} --> o numero ${comparacao}`)


// 8 - Calculadora com switch 


const digiteOhSinal = prompt("Digite o sinal: ")
const numeroInicial = 100
const numeroFinal = 100

function calculadoraCompleta ( digiteValor ) {  
    switch (digiteValor) {
        case "+":
          return numeroInicial + numeroFinal
        case "*":
            return numeroInicial * numeroFinal
        case "-":
            return numeroInicial - numeroFinal
        case "/":
            return numeroInicial / numeroFinal

    }
}

const analisePrimeira = calculadoraCompleta(digiteOhSinal)

console.log(`Vamos faze a operação ${numeroInicial} ${digiteOhSinal} ${numeroFinal} é igual ${analisePrimeira}`)

// 9 - Calculadora 2 

const digiteOhSinal1 = prompt("Digite o sinal: ")
const numeroInicial2 = 100
const numeroFinal3 = 100


function calculadoraCompletaDoisPontoZero ( numeroInicial2, numeroFinal3, digiteValor) {
    let resultado
    
    switch (digiteValor) {
        case "+":
            resultado = numeroInicial2 + numeroFinal3
            break
        case "/":
            resultado = numeroInicial2 / numeroFinal3
            break
        case "*":
            resultado = numeroInicial2 * numeroFinal3
            break
        case "*":
            resultado = numeroInicial2 - numeroFinal3
            break
        default:
            "Valor Invalido"
            break;
    }
        return `${resultado}`   /// por causa do let que variavel local
}

const analiseSegunda  = calculadoraCompletaDoisPontoZero(numeroInicial2, numeroFinal3, digiteOhSinal1)


console.log(`Vamos faze a operação ${numeroInicial2} ${digiteOhSinal1} ${numeroFinal3} é igual ${analiseSegunda}`)