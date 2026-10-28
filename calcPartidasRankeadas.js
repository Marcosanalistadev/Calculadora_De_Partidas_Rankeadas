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



const niveis = [
    { limite: 10, nome: "Ferro" },
    { limite: 20, nome: "Bronze" },
    { limite: 50, nome: "Prata" },
    { limite: 80, nome: "Ouro" },
    { limite: 90, nome: "Diamante" },
    { limite: 100, nome: "Lendário" },
    { limite: Infinity, nome: "Imortal" }
];

function calcularNivel(vitorias) {
    for (const nivel of niveis) {
        if (vitorias <= nivel.limite) {
            return nivel.nome;
        }
    }
}

function calcPartidasRankeadas(vitorias, derrotas) {
    if (
        !Number.isInteger(vitorias) ||
        !Number.isInteger(derrotas) ||
        vitorias < 0 ||
        derrotas < 0
    ) {
        return "Erro: informe valores inteiros não negativos.";
    }

    const saldo = vitorias - derrotas;
    const nivel = calcularNivel(vitorias);

    return `O Herói tem saldo de ${saldo} e está no nível ${nivel}`;
}

console.log(calcPartidasRankeadas(100, 40));

