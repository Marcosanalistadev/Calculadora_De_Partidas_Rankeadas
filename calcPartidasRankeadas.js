/*Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável,
o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */


let resultado = calcPartidasRankeadas(100 , 40 )
var nivel = ""

function calcPartidasRankeadas( qntVitorias , qntDerrotas ){

    saldoVitorias = ( qntVitorias - qntDerrotas )
    return saldoVitorias
}    

    if( saldoVitorias <= 10 ){
        nivel = "Ferro"
    
    } else if ( saldoVitorias >= 11 && saldoVitorias <= 20){
        nivel = "Bronze"
    
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        nivel = "Prata"
    
    }else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        nivel = "Ouro"
    
    }else if (saldoVitorias >= 81 && saldoVitorias <= 90){
        nivel = "Diamante"

    }else if (saldoVitorias >=91 && saldoVitorias <= 100){
        nivel = "Lendário"
    
    }else if (saldoVitorias >= 101){
    nivel = "Imortal"
   
}

console.log(` O Herói tem de saldo de ${saldoVitorias} está no nível ${nivel}`)

