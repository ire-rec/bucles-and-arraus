'use strict';
//----------------------- BUCLE FOR----------------//
// for (let i=0; i<=10; i++){
//     console.log(i);
// }
// 1) indicar valor a la variable let
// 2) indicar cuántas veces se hará la repetición.
// 3) indicar que se aumentará de 1 en 1 (i++)

const numbersParagraph = document.querySelector('.js_numbers');
const msg = document.querySelector('.js_msg');

for (let i=0; i<=5; i++){
    const html=`<Option value="${i}">${'opción '+ (i+1)}</option>`;
    numbersParagraph.innerHTML+= html;
};

for (let i=0; i<5; i++){
    let html = `<li>${i+1}) Hay que indicar valor a la variable let.</li>` 
    html += `<li>Indicar cuántas veces se hará la repetición.</li>`
    html += `<li> Indicar que se aumentará de uno en uno</li>`;
    msg.innerHTML += html;
  }

  //------------------BUCLE FOR OF---------------//

  //sirva para recorrer arrays

  const bestAnimatedNominees =[         "Zootopia",
"Kubo and the Two Strings",
"La tortue rouge",
"Ma vie de Courgette",
"Moana", ];

console.dir(bestAnimatedNominees);

for (let i = 0; i < bestAnimatedNominees.length; i++) {
    console.log(
    `"${bestAnimatedNominees[i]}" was nominated to 89th Academy Awards`
    ); }

for (const oneMovie of bestAnimatedNominees){
    numbersParagraph.innerHTML +=`<li>${oneMovie} was nominated</li>`;
};