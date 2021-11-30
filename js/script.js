// Consegna:
// Dati tre array contenenti:
//una lista ordinata di 5 immagini,
//una lista ordinata dei relativi 5 luoghi e
//una lista di 5 news,
//creare un carosello come nella foto allegata.
//      MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
//      MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
//      MILESTONE 3
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
//-titolo e
//-testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

//una lista ordinata di 5 immagini,
const immagini = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

//una lista ordinata dei relativi 5 luoghi e
const luoghi = ["svezia", "svizzera", "gran bretagna", "germania", "paradise"];

// seleziono i container dove andranno le immagini
const containerImmaginiGrandi = document.querySelector('.box_left');
const containerImmaginiPiccole = document.querySelector('.box_right');

// creo le classi active, first, last e specifico quando andranno inserite
for (let i = 0; i < immagini.length; i++) {
    let classImg = '';
    if (i == 0) {
        classImg = 'active first';
    } else if (i == immagini.length) {
        classImg = 'last';
    }
// indico dove inserire le clasi appena create
    const tagLeft = `<img class="${classImg}" src = "${immagini[i]}" alt = "">`;
    const tagRight = `<img class="${classImg}" src="${immagini[i]}" alt="">`;

    containerImmaginiGrandi.innerHTML += tagLeft;
    containerImmaginiPiccole.innerHTML += tagRight;
}

// pulsanti up e down
// seleziono i pulsanti up e down
const pulsanteUp = document.querySelector('.arrow_up');
const pulsanteDown = document.querySelector('.arrow_down');

// ora indico cosa deve succedere dopo l'evento "click" sul pulsante down
pulsanteDown.addEventListener('click',
    function () {
        // indico gli elementi con classe active
        const immaginiGrandiActive = document.querySelector('.box_left img.active');
        const immaginiPiccoleActive = document.querySelector('.box_right img.active');

        // vado a modificare la classe dell'immagine grande in base all'evento
        const listClass = immaginiGrandiActive.classList;
        let last = false;
        for (let i = 0; i < listClass.length; i++) {
            if (listClass[i] == 'last') {
                last = true;
            }   
        }

        let lastImmaginePiccola = immaginiPiccoleActive.classList.contains('last');

        // se non sono nell'ultimo (last) vado avanti, cerco l'elemento successivo e aggiungo la classe active
        if (last == false){
            immaginiGrandiActive.classList.remove('active');
            const prossimoElemento = immaginiGrandiActive.nextElementSibling;
            prossimoElemento.classList.add('active');
        }
        if (lastImmaginePiccola == false){
            immaginiPiccoleActive.classList.remove('active');
            const prossimoElementoPiccolo = immaginiPiccoleActive.nextElementSibling;
            prossimoElementoPiccolo.classList.add('active');
        }
    }
);

// ora indico cosa deve succedere dopo l'evento "click" sul pulsante up
pulsanteUp.addEventListener('click',
    function () {
        // indico gli elementi con classe active
        const immaginiGrandiActive = document.querySelector('.box_left img.active');
        const immaginiPiccoleActive = document.querySelector('.box_right img.active');

        // vado a modificare la classe dell'immagine grande in base all'evento
        const listClass = immaginiGrandiActive.classList;
        let first = false;
        for (let i = 0; i < listClass.length; i++) {
            if (listClass[i] == 'first') {
                first = true;
            }
        }

        let firstImmaginePiccola = immaginiPiccoleActive.classList.contains('first');

        // se non sono nell'ultimo (first) vado avanti, cerco l'elemento successivo e aggiungo la classe active
        if (first == false) {
            immaginiGrandiActive.classList.remove('active');
            const elementoPrima = immaginiGrandiActive.previousElementSibling;
            elementoPrima.classList.add('active');
        }
        if (firstImmaginePiccola == false) {
            immaginiPiccoleActive.classList.remove('active');
            const elementoPiccoloPrima = immaginiPiccoleActive.previousElementSibling;
            elementoPiccoloPrima.classList.add('active');
        }
    }
);



