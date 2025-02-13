import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let arreglo = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let geros = ['ate', 'peed', 'crushed', 'broke'];
let Amigo = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let indicealeatorio = Math.floor(Math.random() * arreglo.length);
let indicealeatorio1 = Math.floor(Math.random() * geros.length);
let indicealeatorio2 = Math.floor(Math.random() * Amigo.length);
let indicealeatorio3 = Math.floor(Math.random() * when.length);

let valor =arreglo[indicealeatorio] +  " " + geros[indicealeatorio1] +  " " + Amigo[indicealeatorio2] +  " " + when[indicealeatorio3];

console.log(valor);



  //write your code here
  document.querySelector("#excuse").innerHTML=valor
  console.log("Hello Rigo from the console!");
};
