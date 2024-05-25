# Projeto Conta Bancária em JavaScript
Este projeto consiste em uma implementação básica de um sistema de contas bancárias utilizando JavaScript, demonstrando o conceito de herança prototípica e polimorfismo.

## Estrutura do Projeto
O projeto é estruturado em duas classes principais: Conta (superclasse) e suas subclasses CC (Conta Corrente) e CP (Conta Poupança).

### Superclasse: Conta
A classe Conta representa uma conta bancária genérica com os seguintes atributos:

### Agência: Número da agência bancária.
Conta: Número da conta bancária.
Saldo: Saldo disponível na conta.
Métodos da Classe Conta:
sacar(valor): Método para sacar um valor da conta. Verifica se há saldo suficiente e, se não, exibe uma mensagem de saldo insuficiente.

depositar(valor): Método para depositar um valor na conta.

verSaldo(): Método para exibir o saldo atual da conta.

### Subclasse: CC (Conta Corrente)
A classe CC herda da classe Conta e adiciona um atributo adicional:

Limite: Limite de crédito adicional disponível na conta corrente.
Métodos da Classe CC:
sacar(valor): Sobrescreve o método sacar da superclasse para incluir a verificação do limite de crédito. Se o valor do saque ultrapassar o saldo somado ao limite, exibe uma mensagem de limite insuficiente.
### Subclasse: CP (Conta Poupança)
A classe CP herda da classe Conta e não possui atributos adicionais além dos herdados da superclasse.

Métodos da Classe CP:
Utiliza os métodos herdados da superclasse Conta.
### Funcionalidades
Instanciando Contas: Exemplo de criação de instâncias das classes Conta, CC e CP com diferentes parâmetros.

Operações Bancárias: Demonstra operações básicas como saque e depósito nas contas, exibindo o saldo atual após cada operação.

## Execução do Código
Para executar o código:

Clone o repositório para sua máquina local.

Abra o arquivo JavaScript em um ambiente de desenvolvimento, como um editor de código ou um ambiente online.

Execute o código JavaScript para ver as operações bancárias sendo realizadas e os resultados exibidos no console.

## Exemplo de Uso
Aqui está um exemplo simples de como usar o código:

![image](https://github.com/Cadusommer/Banco-digital/assets/133143314/8bb8e75d-be50-4e3f-9e64-059edebab0db)


## Autor
Este projeto foi desenvolvido por Cadu Sommer.
