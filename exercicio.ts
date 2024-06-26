function multiplicar(a: number, b: number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const contaMultiplicacao = multiplicar(5, 9);
console.log(`Resultado da multiplicação é ${contaMultiplicacao}`);

const mensagem = saudacao('Vinicius');
console.log(mensagem);