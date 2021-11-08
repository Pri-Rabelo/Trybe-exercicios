// const base = 5;
// let height = 8;
// const area = (5 * 8)

// console.log(area);

// const perimeter = 3 * 3;

// console.log(perimeter);

// exercicio 1- JavaScript 
// const a = 8;
// const b = 15;

// console.log (a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// exercicio 2
// const x = 6;
// const y = 12;

// if (x > y){
//     console.log("x é maior"); 
// } else {
//     console.log("y é maior");
// }

// exercicio 3
// const a = 15;
// const b = 20;
// const c = 32;

// if (a > b && a > c){
//     console.log ("a é maior");
// } else if (b > a && b > c){
//     console.log ("b é maior");
// } else {
//     console.log ("c é maior");
// }

// exercício 4
// const numero = -6

// if (numero > 0){
//     console.log ("positive");
// } else if (numero < 0){
//     console.log ("negative");
// } else {
//     console.log ("zero");
// }

// exercicio 5
// const a = 50
// const b = 50
// const c = 80
// let triangulo = (a + b + c);
// let anguloinvalido = (a < 0 && b < 0 && c < 0);

// console.log(anguloinvalido);
//   if (anguloinvalido == false){
//     if (triangulo === 180){
//         console.log ("true");
//     } else {
//         console.log ("false");
//     };
//   } else {
//       console.log ("Erro!")
//   }

// exercicio 6
// let xadrez = "torre";

// switch (xadrez.toLowerCase()) {
//     case "dama":
//         console.log ("dama-> move pra qlq direção, qts casas quiser");
//         break;
//     case "bispo":
//         console.log ("bispo-> move diagonal, qts casas quiser")
//         break;
//     case "torre":
//         console.log ("torre-> move na ventical e horizontal")
//         break;
//     case "rei":
//         console.log ("rei> move qlq direção, uma casa por vez")
//         break;
//     default :
//     console.log ("Erro, peça Invalida!")
//     break;
// }

// exercicio 7
// let nota = 98

// if (nota >100 || nota <0){
//     console.log ("Erro!");
// }else if (nota >= 90){
//     console.log ("nota A");
// } else if (nota >= 80) {
//     console.log ("nota B");
// } else if (" nota >= 70"){
//     console.log ("nota C");
// } else if (nota >= 60){
//     console.log ("nota D");
// } else if (nota >= 50){
//     console.log ("nota E");
// } else {
//     console.log ("nota F")
// } 

//  exercício 8
// const a = 8;
// const b = 7;
// const c = 3;

// let par = false;
// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//     par = true;
// };
//  console.log(par);

// exercicio 9
// const a = 9;
// const b = 7;
// const c = 2;

// let impar = false;
// if (a % 2 !== 0 || b % 2 !== 0 || c %2 !== 0){
//     impar = true
// }; console.log(impar);

// exercicio 10
// const custoProduto = 15
// const valorVenda = 45
// let Imposto = (0.20 * (custoProduto));
// let lucro = (valorVenda - custoProduto) * 1000;


// if ( custoProduto > 0 && valorVenda > 0){
//     console.log (lucro);
// } else {
//     console.log ('Erro! Entrada tem que ser maior que zero!')
// }

// exercicio 11
const salarioBruto = 1500.10;
let INSS;
let IR;

if (salarioBruto <= 1556.94){
    INSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92){
    INSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82){
    INSS = salarioBruto * 0.11;
} else {
    INSS = 570.88;
}

const salarioLiquido = salarioBruto - INSS

 if (salarioLiquido <= 1903.98){
     IR = 0;
 } else if (salarioLiquido <= 2826.65){
     IR = (salarioLiquido * 0.075) - 142.80;
 } else if (salarioLiquido <= 3751.05){
     IR = (salarioLiquido * 0.15) -354.80;
 } else if (salarioLiquido <= 4664.68){
     IR = (salarioLiquido * 0.225) - 636.13;
 } else {
     IR = (salarioLiquido * 0.275) - 869.36;
 }

  console.log('Salário   ' + (salarioLiquido - IR));
