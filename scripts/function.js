'use strict';

// --- FUNZIONE CHIAMATA SERVER ---
const chiamataApi = () => {
    return fetch('https://flynn.boolean.careers/exercises/api/random/mail')         //Mando la richiesta al server
        .then(risposta => {                                                         //Quando il server mi risponde 
            return risposta.json();                                                 //Trasformo i dati in json
        })
        .then(dati => {                                                             //dopo la trasformazione leggo il contenuto
            return dati.response;                                                   //Restituisco solo l'email 
        })
}

// --- FUNZIONE STAMPA LISTA ---

const stampaElemListaIntera = arrayEmail => {
    const contenutoHtml = arrayEmail.map(email => {                                 //Trasformo l'array del server in un array di stringhe
        return `<li><a href="#">${email}</a></li>`;                                 //Restituisco la stringa per ogni email
    });
    const stringaFinale = contenutoHtml.join('');                                   //Unisco tutto in un unica stringa 

    lista.innerHTML = stringaFinale;                                                //ignetto la stringa nel html 
}

// --- FUNZIONE RIGENERA LISTA ---

const listaEmail = [];                                                              //Creo un array vuoto per accumulare le 10 email  

const generaLista = () => {
    lista.innerHTML = "";                                                           //Pulisco la lista precedente
    listaEmail.length = 0;                                                          //La faccio ripartire da 0

    for (let i = 0; i < 10; i++) {                                                  //inizio un ciclo con 10 interazioni
        chiamataApi().then(email => {                                               //Ad ogni interazione faccio una richiesta al server
            listaEmail.push(email);                                                 //appena mi rispode la pusho nel array

            if (listaEmail.length === 10) {                                         //quando l'array raggiunge i 10 elementi
                stampaElemListaIntera(listaEmail);                                  //stampo l'intera lista
                contenitore.classList.remove('d-none');                             //rimuovo la classe d-none dal contenitore
            }
        });
    }
}