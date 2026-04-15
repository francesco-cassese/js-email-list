'use strict';

// COLLEGAMENTI

const lista = document.querySelector('#email-list');
const btnRigenera = document.querySelector('#btn-refresh');
const contenitore = document.querySelector('.container-list');


btnRigenera.addEventListener('click', generaLista);                 //Collego la funzione al bottone per poter fare il refresh alla pagine