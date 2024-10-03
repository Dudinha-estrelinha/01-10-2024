let numeros = [];
let indicesNegativos = [];

for (let i = 0; i < 10; i++) {
  numeros.push(parseInt(prompt("Digite um número inteiro:"))); 
}

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 0) { 
    indicesNegativos.push(i); 
  }
}

console.log("Índices onde os números foram negativos:", indicesNegativos); 

