"use strict";
//----------------------- BUCLE FOR----------------//
//Nos permite modificar valores de un array porque nos da info sonre el índice.
// for (let i=0; i<=10; i++){
//     console.log(i);
// }
// 1) let i=0 -> Indica valor de la variable let.
// 2) i<=10 -> Indica cuántas veces se hará la repetición.
// 3) i++ -> Indica que se aumentará de 1 en 1.

// EJERCICIO: Crear un select cuyas options estén numeradas del 1 al 5.
const numbers = document.querySelector(".js_numbers");
for (let i = 1; i <= 5; i++) {
  const html = `<option value="${i}">${"opción " + i}</option>`;
  numbers.innerHTML += html;
}
//EJERCICIO: Insertar en un listado teoría sobre bucle for
const theory = document.querySelector(".js_theory");
for (let i = 0; i < 5; i++) {
  let html = `<li>${i + 1}) let i=0 -> Indica valor de la variable let.</li>`;
  html += `i<=10 -> Indica cuántas veces se hará la repetición.</li>`;
  html += `i++ -> Indica que se aumentará de 1 en 1.//`;
  theory.innerHTML += html;
}

//EJERCICIO: Crear un bucle que muestre 10 veces, en la consola, el texto siendo el número de vueltas desde 1 hasta 10 (no desde 0 hasta 9).

for (let i = 1; i < 11; i++) {
  console.log(`Voy por la vuelta ${i}`);
}

//EJERCICIO: Contando de dos en dos
//Vamos a partir de una variable acc con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable acc en cada iteración del bucle. Al acabar el bucle, mostraremos en la consola el texto "El resultado es:X", siendo X el valor de la variable acc .

for (let acc = 0; acc < 10; acc++) {
  console.log(`El resultado es ${acc * 3}`);
}

//Sacar la media de un array que está como parámetro
const average = (arrNumbers = [3, 5, 7, 9, 11, 20]) => {
  let sum = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    sum += arrNumbers[i];
  }
  return sum;
};
console.log(average());

//EJERCICIO: Previsión para ver la luna del cazador//
//Cada 3 años se produce una luna llena completamente iluminada por el Sol. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver el 5 de octubre y mucha gente se la perdió. Vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.

for (let i = 0; i < 15; i++) {
  console.log(
    `Las próximas "lunas del cazador" serán el 5 de octubre de ${2023 + i * 3}`
  );
}

//Presentar a las películas nominadas con bucle for

const NomineesBucleFor = [
  "Minions",
  "Elemental",
  "Inside Out",
  "Trolls",
  "Wish",
];

for (let i = 0; i < NomineesBucleFor.length; i++) {
  console.log(`"${NomineesBucleFor[i]}" was nominated to 89th Academy Awards`);
}
//------------------BUCLE FOR OF---------------//

//Solo nos permite leer datos del array. No podemos cambiarlos.

//EJERCICIO: Presentar a las películas nominadas con bucle for of
const animatedNominees = [
  "Minions",
  "Elemental",
  "Inside Out",
  "Trolls",
  "Wish",
];

for (const oneMovie of animatedNominees) {
  console.log(`${oneMovie} was nominated. Yeah.`);
}

//Comprobar si es array:
const week = ["L", "M", "M", "J", "V", "S", "D"];
console.log(Array.isArray(week));

// //Ejercicio tenemos mucho en común. Usando for...of hacer un programa que pregunte a la usuaria cuáles son sus dos libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.

const favBook1 = document.querySelector(".favBook1_js");
const favBook2 = document.querySelector(".favBook2_js");
const btn = document.querySelector(".btn_js");
const message = document.querySelector(".message_js");

const handleClick = (ev) => {
  ev.preventDefault();
  const inputBook1 = favBook1.value;
  const inputBook2 = favBook2.value;
  const fav = [inputBook1, inputBook2];
  //usando for
  for (let i = 0; i < fav.length; i++) {
    message.innerHTML += `¡A mí también me encantó ${fav[i]}! Tenemos mucho en común, humana.`;
  }
  //usando for of
  for (const lib of fav) {
    message.innerHTML += `¡A mí también me encantó ${lib}! Tenemos mucho en común, humana.`;
  }
};
btn.addEventListener("click", handleClick);

//-----------------BUCLES EN ARRAYS CON OBJETOS-----------------------------//

//EJERCICIO: A story of adalabers

// Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:

// María, 29 años, diseñadora
// Lucía, 31 años, ingeniera química
// Susana, 34 años, periodista
// Rocío, 25 años, actriz
// Inmaculada, 21 años, diseñadora

// 4. Una función countDesigners que devuelve el número de adalabers que son diseñadoras.
// Según vayáis creando las funciones, debéis ir probando que funcionan invocándolas con nuestra estrucutra de datos como argumento. Al final, modificad la estructura de datos para añadir, modificar o quitar adalabers. Y probad que las funciones siguen devolviendo el valor correcto.

// En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.
const adalabers = [
  {
    nombre: "María",
    edad: 29,
    profesión: "diseñadora",
  },
  {
    nombre: "Lucía",
    edad: 31,
    profesión: "ingeniera",
  },
  {
    nombre: "Susana",
    edad: 34,
    profesión: "periodista",
  },
  {
    nombre: "Rocío",
    edad: 25,
    profesión: "actriz",
  },
  {
    nombre: "Inmaculada",
    edad: 21,
    profesión: "diseñadora",
  },
];
console.log(adalabers);

// Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.

// 1. Una función countAdalabers que devuelve el número de adalabers en el listado.
const countAdalabers = () => {
  const adalabersTotal = adalabers.length;
  console.log(adalabersTotal);
};
countAdalabers();

// 2. Una función averageAge que devuelve la media de edad de listado.
let suma = 0;
const averageAge = () => {
  for (const oneAdalaber of adalabers) {
    suma += oneAdalaber.edad / adalabers.length;
  }
  console.log(suma);
};
averageAge();

//EJERCICIO: Botones de alarma

const alarmBtns = document.querySelectorAll(".btnAlarm_js");
console.log(alarmBtns);

for (const oneBtn of alarmBtns) {
  oneBtn.addEventListener("click", (ev) => {
    oneBtn.classList.toggle("red");
    console.log("yey");
  });
}

const itemss = [
  "Ada",
  1815,
  ["Informática", "Matemática", "Escritora"],
  {
    mother: "Anna Isabella",
    father: "Lord Byron",
  },
];
for (const eachDat of itemss) {
  console.log(typeof eachDat);
}
