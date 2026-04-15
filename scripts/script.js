'use strict';

// COLLEGAMENTI

const lista = document.querySelector('#email-list');
const btnRigenera = document.querySelector('#btn-refresh');

rigeneraLista();                                                //Richiamo funzione per poter stampare la lista all'inizio

btnRigenera.addEventListener('click', rigeneraLista);           //Collego la funzione al bottone per poter fare il refresh alla pagine