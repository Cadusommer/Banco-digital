// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} ` + `Saldo: R$${this.saldo.toFixed(2)}`);
}

// Subclass CC (Conta Corrente)
function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Limite insuficiente: saldo atual ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

// Subclass CP (Conta Poupança)
function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

// Testes

const conta1 = new Conta(11, 22, 10);
conta1.sacar(10);
console.log(conta1);

console.log(`---------------`);

const cc1 = new CC(10, 25, 50, 100);
cc1.sacar(100);
console.log(cc1);

console.log(`---------------`);

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);
console.log(cp);