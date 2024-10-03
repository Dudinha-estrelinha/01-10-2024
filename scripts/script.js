let alunos = [];
let totalNotas = 0;

for (let i = 0; i < 5; i++) {
  let nome = prompt("Digite o nome do aluno:");
  let nota = parseFloat(prompt("Digite a nota de " + nome + ":"));
  alunos.push({ nome, nota }); 
  totalNotas += nota; 
}

let media = totalNotas / 5; 

console.log("Alunos abaixo da média:");
for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota < media) { 
    console.log(alunos[i].nome); 
  }
}
