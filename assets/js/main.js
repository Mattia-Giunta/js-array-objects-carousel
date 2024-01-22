// Consegna:

// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione

// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

// inizializzazione costanti
const arrowRight = document.getElementById('arrowNext');
const arrowLeft = document.getElementById('arrowPrev');
const placeHTML = document.getElementById('place');
const infoHTML = document.getElementById('info');
const figureHtml = document.getElementById('figure');
const listIMG = document.getElementById('listImage');

console.log( figureHtml )

// array di oggetti 
const images = [
    
    {
        place:'Stati Uniti',
        info:'Antelope Canion',
        link:'./assets/img/antelope canyon.jpg',
    },
    {
        place:'Italia',
        info:'Colosseo',
        link:'./assets/img/colosseo.jpg',
    },
    {
        place:'Perù',
        info:'Machu Picchu',
        link:'./assets/img/machu picchu.jpg',
    },
    {
        place:'Australia',
        info:'Opera House',
        link:'./assets/img/opera house.jpg',
    },
    {
        place:'Giappone',
        info:'Santuario di Fuschimi Inari',
        link:'./assets/img/santuario giappone.jpg',
    },
    
];

// variabile per dare una posizione all'immagine
let currentImage = 0;

// array vuoto per le immagini sotto al carosello
let tumbnailsArray = [];

// variabile per creare un div contenitore delle immagini sotto al carosello nell'Html
let tumbContainer;

// assegna la prima immagine e il contenuto di pertenza
figureHtml.setAttribute('src', images[currentImage].link);
placeHTML.innerText = images[currentImage].place;
infoHTML.innerText = images[currentImage].info;


// ciclo per creare le immagini sotto al carosello
for(let i = 0; i < images.length; i++){

    // creazione del div, assegnazione dello stile, pusharlo nell'array e inserimento dell'elemento con append 
    tumbContainer = document.createElement('div')
    tumbContainer.style.backgroundImage = `url("${images[i].link}")`;
    tumbContainer.classList.add('tumbIMG')
    tumbnailsArray.push(tumbContainer)
    listIMG.append(tumbContainer)


    // evento al click per selezionare l'immagine sotto e farla comparire nel carosello
    tumbContainer.addEventListener('click', function(){

        currentImage = tumbnailsArray.indexOf(this);

        figureHtml.setAttribute('src', images[currentImage].link);
        placeHTML.innerText = images[currentImage].place;
        infoHTML.innerText = images[currentImage].info;

        console.log(tumbnailsArray.indexOf(this))
    })

}

console.log(tumbnailsArray)

// al click fa scorrete le immagini a destra
arrowRight.addEventListener('click', function(){

    if(currentImage === 4){

        currentImage = 0;

    } else {

        currentImage++
    }

    figureHtml.setAttribute('src', images[currentImage].link);
    placeHTML.innerText = images[currentImage].place;
    infoHTML.innerText = images[currentImage].info;

})



// al click fa scorrete le immagini a sinistra
arrowLeft.addEventListener('click', function(){

    if(currentImage === 0){

        currentImage = 4;

    } else {

        currentImage--
    }

    figureHtml.setAttribute('src', images[currentImage].link);
    placeHTML.innerText = images[currentImage].place;
    infoHTML.innerText = images[currentImage].info;

})

// Terminato esercizio