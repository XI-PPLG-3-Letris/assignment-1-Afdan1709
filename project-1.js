/*
program kalkulator sederhana
req:
-menggunakan variabel Es6
-menggunakan arrow fungtion
-menggunakan operator => +, -, *, /, **, %
*/

let a=5
let b=3 
const pertambahan = () =>{
  let c = a + b; 
  return c 
}

const pengurangan = () =>{
  let c = a - b; 
  return c 
}

const perkalian = () =>{
  let c = a * b; 
  return c 
}

const pembagian = () =>{
  let c = a / b; 
  return c 
}

const perpangkatan = () =>{
  let c = a ** b; 
  return c 
}

const modulus = () =>{
  let c = a % b; 
  return c 
}

console.log(`hasil dari ${a} + ${b} = ${pertambahan()}`);

console.log(`hasil dari ${a} - ${b} = ${pengurangan()}`);

console.log(`hasil dari ${a} * ${b} = ${perkalian()}`);

console.log(`hasil dari ${a} / ${b} = ${pembagian()}`);

console.log(`hasil dari ${a} ** ${b} = ${perpangkatan()}`);

console.log(`hasil dari ${a} % ${b} = ${modulus()}`);