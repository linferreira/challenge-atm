# Cash Machine

## O Problema
  Desenvolva uma aplicação que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico.

### Sua aplicação deve:

* Entregar sempre o menor número de notas possíveis
* Sacar valores apenas com as notas disponíveis
* Ter saldo do cliente infinito
* Ter quantidade de notas infinita
* Possuir apenas notas de R$ 100,00, R$ 50,00, R$ 20,00 e R$ 10,00
* Retornar mensagens de erro em caso de entradas inválidas
* Observação:

#### Exemplos:

Entrada | Resultado
------------ | -------------
30.00 | [20.00, 10.00]
80.00 | [50.00, 20.00, 10.00]
125.00 | Erro de notas indisponíveis
-130.00 | Erro de valor inválido
NULL | Erro de valor nulo


Confira o resultado [aqui](https://linferreira.github.io/challenge-atm/)
