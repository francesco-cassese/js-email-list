# JS Email List 📧

## 📌 Descrizione
Il progetto consiste nella creazione di una lista dinamica di indirizzi email recuperati tramite un servizio esterno. L'obiettivo è imparare a gestire le chiamate asincrone verso un'API e visualizzare i dati ottenuti nel DOM.

## 🎯 Obiettivo
Implementare un sistema che effettui 10 richieste separate a un'API per ottenere altrettanti indirizzi email casuali e li organizzi in una lista ordinata all'interno della pagina.

### Focus Tecnico:
- **Chiamate API (Fetch):** Utilizzo di metodi per effettuare richieste HTTP asincrone verso l'endpoint fornito da Boolean.
- **Asincronia:** Gestione della natura asincrona delle risposte per assicurarsi che i dati siano pronti prima di tentare di visualizzarli.
- **DOM Manipulation:** Creazione dinamica di elementi `<li>` all'interno di una `<ul>` per mostrare i risultati in tempo reale.
- **Event Handling (Bonus):** Implementazione di un pulsante di refresh che svuota la lista esistente e genera una nuova sequenza di email.

## 🛠️ Tecnologie Utilizzate
- **HTML5:** Struttura della pagina e contenitore della lista.
- **CSS3 / Bootstrap:** Stilizzazione dell'interfaccia per un layout pulito e responsive.
- **JavaScript (ES6+):** Logica per il recupero dati (Fetch) e manipolazione del DOM.

---

## 🧪 Flusso di Lavoro
1. **Richiesta:** Lo script avvia un ciclo che interroga l'API di Boolean 10 volte.
2. **Attesa:** Gestione della risposta tramite le *Promises* ( `.then()` ).
3. **Popolamento:** Ogni email ricevuta viene aggiunta a un array temporaneo o iniettata direttamente nella lista HTML.
4. **Visualizzazione:** Completate le chiamate, la lista finale è visibile all'utente.

---
SISTEMA DI RECUPERO DATI ATTIVO... 🌐

*Esercizio Boolean - Corso Full Stack Web Development*