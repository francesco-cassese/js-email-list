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
    let contenutoHtml = '';                                                         //Stringa d'appogio
    for (let i = 0; i < arrayEmail.length; i++) {
        contenutoHtml += `<li>${arrayEmail[i]}</li>`;                               //Creo la riga della lista 
    }
    lista.innerHTML = contenutoHtml;                                                //sovrascrivo il contenuto   
}

// --- FUNZIONE RIGENERA LISTA ---

const listaEmail = [];                                                              //Creo un array vuoto per accumulare le 10 email  

const rigeneraLista = () => {
    lista.innerHTML = "";                                                           //Pulisco la lista precedente
    listaEmail.length = 0;                                                          //La faccio ripartire da 0

    for (let i = 0; i < 10; i++) {                                                  //inizio un ciclo con 10 interazioni
        chiamataApi().then(email => {                                               //Ad ogni interazione faccio una richiesta al server
            listaEmail.push(email);                                                 //appena mi rispode la pusho nel array

            if (listaEmail.length === 10) {                                         //quando l'array raggiunge i 10 elementi
                stampaElemListaIntera(listaEmail);                                  // stampo l'intera lista
            }
        });
    }
}