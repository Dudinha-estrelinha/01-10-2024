let vetorA = [];
let vetorB = [];
let vetorC = [];


for (let i = 0; i < 5; i++) {
  vetorA.push(parseInt(prompt("Digite um valor para o vetor A:"))); 
}


for (let i = 0; i < 5; i++) {
  vetorB.push(Math.floor(Math.random() * 100));  
}


for (let i = 0; i < 5; i++) {
  vetorC.push(vetorA[i] * vetorB[i]); 
}

console.log("Vetor A:", vetorA);
console.log("Vetor B (sorteado):", vetorB);
console.log("Vetor C (produto):", vetorC);

