const alunos = [
    { nome: 'Vinicius', nota: 9.5 },
    { nome: 'Maria', nota: 5.0 },
    { nome: 'Pedro', nota: 6.0 },
    { nome: 'Ana', nota: 8.0 },
    { nome: 'Carlos', nota: 4.5 },
    { nome: 'Josué', nota: 7.5 },
    { nome: 'João', nota: 3.5 },
];

function filtroAlunosNotas(alunos) {
    const acima = alunos.filter(aluno => aluno.nota >= 6);
    console.log('Alunos com nota igual ou maior que 6');
    return acima;
}

const alunosNotasAcima = filtroAlunosNotas(alunos);

console.log(alunosNotasAcima);