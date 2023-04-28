// Array de objetos com nome e nota de alunos
const alunos = [
  { nome: 'João', nota: 8 },
  { nome: 'Maria', nota: 7 },
  { nome: 'Pedro', nota: 5 },
  { nome: 'Ana', nota: 6 },
  { nome: 'Felipe', nota: 9 },
  { nome: 'Carla', nota: 4 }
];

// Função para retornar apenas os alunos com nota maior ou igual a 6
const alunosAprovados = alunos.filter(({ nota }) => nota >= 6);

console.log(alunosAprovados);
// [{ nome: 'João', nota: 8 },
// { nome: 'Maria', nota: 7 },
// { nome: 'Ana', nota: 6 },
// { nome: 'Felipe', nota: 9}]