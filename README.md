 Calculadora de Partidas Rankeadas

Projeto desenvolvido em JavaScript para calcular o saldo de vitórias e derrotas de um jogador e determinar seu nível em um sistema de partidas ranqueadas.

O projeto faz parte de um desafio de lógica de programação, com o objetivo de praticar conceitos fundamentais do JavaScript, como funções, variáveis, operadores, estruturas condicionais, laços de repetição e arrays de objetos.

Objetivo
Criar uma função que receba a quantidade de vitórias e derrotas de um jogador, calcule o saldo de partidas e identifique seu nível de acordo com a quantidade total de vitórias.

O saldo é calculado pela seguinte fórmula:

javascript
saldo = vitorias - derrotas;


O nível do jogador é determinado pela quantidade de vitórias, independentemente do saldo obtido.

Classificação dos níveis
Quantidade de vitórias	Nível
Até 10	Ferro
De 11 a 20	Bronze
De 21 a 50	Prata
De 51 a 80	Ouro
De 81 a 90	Diamante
De 91 a 100	Lendário
101 ou mais	Imortal

Tecnologias e recursos utilizados
JavaScript: linguagem utilizada para implementar a lógica da aplicação.
Variáveis e constantes: armazenamento dos dados e resultados.
Funções: organização da lógica em etapas reutilizáveis.
Operadores aritméticos: cálculo do saldo de vitórias e derrotas.
Estruturas condicionais: verificação dos valores recebidos.
Laço for...of: percorrimento dos níveis para identificar a classificação correta.
Array de objetos: organização dos limites e nomes dos níveis.
Template literals: construção da mensagem final utilizando interpolação de valores.
Validação de dados: verificação de números inteiros não negativos.

Como funciona
1. Definição dos níveis

Os níveis são armazenados em um array de objetos chamado niveis. Cada objeto contém um limite máximo de vitórias e o nome da classificação correspondente.

O uso de Infinity no último elemento representa um limite superior sem fim, permitindo classificar como Imortal qualquer jogador com mais de 100 vitórias.

2. Cálculo do nível

A função calcularNivel(vitorias) utiliza um laço for...of para percorrer o array de níveis.

A cada repetição, verifica se a quantidade de vitórias é menor ou igual ao limite do nível atual. Quando encontra a primeira condição verdadeira, retorna o nome correspondente.

Essa abordagem evita uma sequência extensa de estruturas if/else e facilita a manutenção das regras de classificação.

3. Validação dos dados

A função calcPartidasRankeadas(vitorias, derrotas) verifica se os valores recebidos são números inteiros e não negativos.

Para isso, utiliza Number.isInteger() e operadores lógicos. Caso algum valor seja inválido, a função retorna uma mensagem de erro e interrompe a execução.

4. Cálculo do saldo

Após validar os dados, o programa calcula o saldo subtraindo a quantidade de derrotas da quantidade de vitórias.

5. Exibição do resultado

Por fim, a função retorna uma mensagem com o saldo e o nível do jogador, utilizando template literals para inserir os valores calculados no texto.

Exemplo de execução

Entrada:
javascript
console.log(calcPartidasRankeadas(100, 40));


Saída:
text
O Herói tem saldo de 60 e está no nível Lendário


Este projeto representa um exercício prático de lógica de programação e fundamentos do JavaScript. A implementação busca manter o código organizado, legível e de fácil manutenção, aplicando boas práticas adequadas ao estágio de aprendizado.

