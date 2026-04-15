'use strict';

// COLLEGAMENTI

const lista = document.querySelector('email-list');
const btnRigenera = document.querySelector('btn-refresh');

//COSTANTE D'APPOGGIO
const listaEmail = [];                                               // Creo un array vuoto per accumulare gli indirizzi

//CICLO
for (let i = 0; i < 10; i++) {                                       //Faccio partire il ciclo per 10 interazioni
    fetch('https://flynn.boolean.careers/exercises/api/random/mail') //Ad ogni interazione fa una richiesta per avere un email random
        .then(risposta => {                                          //Quando il server mi risponde 
            return risposta.json();                                  //Trasformo i dati in json
        })
        .then(dati => {                                              //dopo la trasformazione leggo il contenuto
            listaEmail.push(dati.response);                          //pusho nell'array solo l'email random
        })
}