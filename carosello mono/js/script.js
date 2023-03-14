/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
*/



/*
<div class="slide active">
    <img src="./img/01.webp" alt="img">
</div>
*/

const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];
const slider = document.querySelector('.slider');
// console.log(slider);

let currentIndex = 0; //variabile che tiene in memoria l'indice corrente

let slides = '';

// aggiungo le immagini
for (let i = 0; i < images.length; i++){
    slides += `
    <div class="slide">
        <img src=" ${images[i]}" alt="img-${i}">
    </div>
    `;
};
// console.log(slides);
slider.innerHTML += slides;
document.querySelectorAll('.slide')[currentIndex].classList.add('active'); 

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
// console.log(next, prev);

// rimuovo active dall'immagine corrente e lo metto all'immagine successiva 
next.addEventListener('click', goNext);

function goNext() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active'); 
    if (currentIndex === images.length -1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    };
    document.querySelectorAll('.slide')[currentIndex].classList.add('active'); 
};

// rimuovo active dall'immagine corrente e lo metto all'immagine precedente
prev.addEventListener('click', goPrev);

function goPrev() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active'); 
    if (currentIndex === 0) {
        currentIndex = images.length -1;
    } else {
        currentIndex--;
    };
    document.querySelectorAll('.slide')[currentIndex].classList.add('active'); 
};

