dailyprogrammer
===============

Escolha um dos exercícios disponíveis para praticar. Cada exercício tem um número, e a explicação do que é pedido, além de um exemplo de *input* e ou *output* esperado.

## Exercícios  
- [Exercício 228](#exercício-228---ordem-alfabética)
- [Exercício 239](#exercício-239---jogo-do-três)
- [Exercício 277](#exercício-277---simplificando-frações)

## Exercício 228 - Ordem Alfabética
Algumas palavras têm suas letras em ordem alfabética, como a palavra "almost", onde cada letra aparece em sequência alfabética.  
Seu desafio é escrever um programa que determine se as letras de uma palavra estão em ordem alfabética. Retornar apenas *true* ou *false* de acordo com a palavra informada.

**Input**  
"b"  
"almost"  
"billowy"  
"biopsy"  
"chinos"  
"chintz"  
"bijou"  
"abhors"  
"begins"  
"chimps"  
"cereal"  
"defaced"  
"sponged"  
"fiddle"  
"wronged"  

**Output**  
true  
true  
true  
true  
true  
true  
true  
true  
true  
true  
false  
false  
false  
false  
false

[Voltar à Lista](#exercícios)

## Exercício 239 - Jogo do Três
Elaborar uma implementação do Jogo do Três.  
Regras do jogo:  
- Se um número for divisível por 3, divida-o por 3;
- Se ele não for divisível, adicione ou subtraia 1 (para torná-lo divisível), e então divida-o por 3;
- O jogo termina quando chegar ao número 1.

Para cada passo dado, o jogo deve retornar o número atual, e o passo tomado (1 para soma, -1 para subtração, ou 0 caso a divisão seja feita diretamente). Ao término do jogo, retornar também o número 1.

**Input**  
100  
68689  
31337357  

**Output**  
[100, -1],  
[33, 0],  
[11, 1],  
[4, -1],  
1

[68689, -1],  
[22896, 0],  
[7632, 0],  
[2544, 0],  
[848, 1],  
[283, -1],  
[94, -1],  
[31, -1],  
[10, -1],  
[3, 0],  
1

[31337357, 1],  
[10445786, 1],  
[3481929, 0],  
[1160643, 0],  
[386881, -1],  
[128960, 1],  
[42987, 0],  
[14329, -1],  
[4776, 0],  
[1592, 1],  
[531, 0],  
[177, 0],  
[59, 1],  
[20, 1],  
[7, -1],  
[2, 1],  
1

[Voltar à Lista](#exercícios)

## Exercício 277 - Simplificando Frações
Uma fração consiste em um numerador (parte superior) e um denominador (parte inferior).  
Simplificar uma fração significa fazer com que o denominador seja o mais próximo posível de 1. Isso pode ser alcançado dividindo o numerador e o denominador por seu máximo divisor comum.  
Você receberá dois números (numerador e denominador, nesta ordem), e deve retornar a fração reduzida (no mesmo formato).

**Input**  
[4, 8]  
[1536, 78360]  
[51478, 5536]  
[46410, 119340]  
[7673, 4729]  
[4096, 1024]  

**Output**  
[1, 2]  
[64, 3265]  
[25739, 2768]  
[7, 18]  
[7673, 4729]  
[4, 1]  

[Voltar à Lista](#exercícios)

---

Todos os exercícios podem ser encontrados no subreddit [dailyprogrammer](https://www.reddit.com/r/dailyprogrammer/)  e foram adaptados com testes para JavaScript.
