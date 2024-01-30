# Chat App v1 in Typescript e ReactJS

Applicazione ReactJS con TypeScript che estende le funzionalità della precedente appplicazione di autenticazione, introducendo una nuova feature di messaggistica. Dopo l'autenticazione, l'utente visualizzerà una pagina dove potrà pubblicare messaggi di testo. Ogni messaggio visualizzerà il nome dell'autore e l'orario di pubblicazione. L'utente avrà la possibilità di eliminare i propri messaggi cliccandoci sopra, ma non quelli degli altri. 

## 1. Autenticazione

Sistema di autenticazione che permetta il login degli utenti utilizzando il localStorage.

## 2. Pagina di messaggistica

Dopo il login, l'utente visualizza una pagina di messaggistica dove può:
- Visualizzare tutti i messaggi inviati dagli utenti e recuperarli dal localStorage.
- Pubblicare un nuovo messaggio di testo.
- Vedere il nome dell'autore e l'orario di pubblicazione accanto a ogni messaggio.

## 3. Eliminazione dei messaggi

Funzionalità per cui, facendo clic su un messaggio, se l'utente è l'autore del messaggio, questo viene eliminato. Altrimenti, non succede nulla.


- ReactJS con TypeScript per lo sviluppo dell'interfaccia utente. (create-react-app --template typescript)
- Stile coerente e responsivo per l'interfaccia utente, utilizzando Styled-Components in JS
