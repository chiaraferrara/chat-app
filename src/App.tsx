/** @format */

import React from 'react';
import { useState } from 'react';
import { User, isUserLogged, utilityGetLoggedEmail, utilityIsUserInLocalStorage } from './utilities';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';

function App() {
  const [email, setEmail] = useState('');
  //destructuring per estrarre due valori dall'array restituito da useState.
  //users è il valore corrente dello stato, e setUsers è la funzione che consente di aggiornare lo stato.

  // useState<User[]>([]): Chiama la funzione useState con un argomento iniziale,
  // che rappresenta il valore iniziale dello stato. In questo caso, il tipo di stato è definito come User[],
  // che indica un array di oggetti di tipo User. L'array iniziale è [], cioè un array vuoto.
  const [users, setUsers] = useState<User[]>([]);

  const saveEmailtoCache = () => {
    localStorage.setItem(`email`, email);
  };

  if (isUserLogged()) {
    return <Welcome />;
  } else if (!isUserLogged()) {
    return <LoginForm />;
  }
  return <div>Loading</div>; //devo tornare qualcosa di default...altrimenti ho errore

  // errore:cannot be used as a JSX component.
  // Its return type 'Element | undefined' is not a valid JSX element.
}

export default App;
