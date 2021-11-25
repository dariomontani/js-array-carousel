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
const immagini = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

//una lista ordinata dei relativi 5 luoghi e
const luoghi = ["svezia", "svizzera", "gran bretagna", "germania", "paradise"];

//una lista di 5 news,
const news = ["lorem", "lorem2", "lorem3", "lorem4", "lorem5"];
