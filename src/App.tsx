/** @format */

import React, { useState, useEffect } from 'react';
import { User, isUserLogged, utilityClearEmail, utilityGetLoggedEmail, utilityIsUserInLocalStorage } from './utilities';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  const [isLogged, setIsLogged] = useState(isUserLogged());

  function onClickLogin() {
    setIsLogged(true);
  }

  function onClickLogout() {
    utilityClearEmail();
    setIsLogged(false);
  }

  //destructuring per estrarre due valori dall'array restituito da useState.
  //users è il valore corrente dello stato, e setUsers è la funzione che consente di aggiornare lo stato.

  // useState<User[]>([]): Chiama la funzione useState con un argomento iniziale,
  // che rappresenta il valore iniziale dello stato. In questo caso, il tipo di stato è definito come User[],
  // che indica un array di oggetti di tipo User. L'array iniziale è [], cioè un array vuoto.
  const [users, setUsers] = useState<User[]>([]);

  return <>{isLogged ? <Welcome onClickLogout={onClickLogout} /> : <LoginForm onClickLogin={onClickLogin} />}</>;
}

export default App;
