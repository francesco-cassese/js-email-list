'use strict';

// FUNZIONE CHIAMATA SERVER
const chiamataApi = () => {
    return fetch('https://flynn.boolean.careers/exercises/api/random/mail')         //Mando la richiesta al server
        .then(risposta => {                                                         //Quando il server mi risponde 
            return risposta.json();                                                 //Trasformo i dati in json
        })
        .then(dati => {                                                             //dopo la trasformazione leggo il contenuto
            return dati.response;                                                   //Restituisco solo l'email 
        })
}

// FUNZIONE STAMPA LISTA

const stampaElemLista = email => {
    lista.innerHTML += `<li>${email}</li>`;
}