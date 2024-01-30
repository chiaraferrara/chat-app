/** @format */

import React from 'react';
import { useState } from 'react';
import { User, utilityGetLoggedEmail, utilityIsUserInLocalStorage } from '../utilities';
import { Button } from './Button';

function LoginForm({ onClickLogin }: { onClickLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const saveEmailtoCache = () => {
    localStorage.setItem(`email`, email);
  };


  const saveUserOnLocalStorage = () => {
    const prevUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = {
      email: email,
      lastLogged: new Date().toLocaleString(),
      previousAccess: null,
      counter: 1,
    };
    setUsers(prevUsersState => [...prevUsersState, user]);
    localStorage.setItem('users', JSON.stringify([...prevUsers, user]));
  };

  const checkEmail = (input: HTMLInputElement) => {
    var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,10})$/;
    if (input.value.match(regex)) {
      return true;
    } else {
      return false;
    }
  };
  //  tipi relativi agli elementi HTML
  const validateEmail = () => {
    const submitBtn: HTMLButtonElement | null = document.getElementById('submitBtn') as HTMLButtonElement;
    const inputEmail: HTMLInputElement | null = document.getElementById('inputEmail') as HTMLInputElement;

    if (inputEmail && submitBtn) {
      const isEmailValid = checkEmail(inputEmail);
      submitBtn.disabled = !isEmailValid;
    }
  };

  const updateUser = () => {
    console.log('Updating...');

    const prevUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const emailLogged = utilityGetLoggedEmail();

    const newUsers = prevUsers.map(user => {
      if (user.email === emailLogged) {
        return {
          ...user,
          previousAccess: user.lastLogged,
          lastLogged: new Date().toLocaleString(),
          counter: user.counter + 1,
        };
      } else {
        return user;
      }
    });
    localStorage.setItem('users', JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  const login = () => {
    const alreadyExist = utilityIsUserInLocalStorage();
    console.log("L'utente esiste già?" + alreadyExist);
    if (alreadyExist) {
      saveEmailtoCache();
      updateUser();
    } else {
      saveEmailtoCache();
      saveUserOnLocalStorage();
    }
  };

  const formElement: HTMLFormElement = document.getElementById('emailForm') as HTMLFormElement;
  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body">
        <a href="https://github.com/chiaraferrara">
          <Button className="btn btn-dark">GitHub</Button>
        </a>
      </nav>
      <div className="App" style={{ width: 18 + 'rem', margin: 'auto', marginTop: '20px' }}>
        <h2>Esegui il Login</h2>
        <form
          id="emailForm"
          name="emailform"
          action="#"
          onSubmit={e => {
            e.preventDefault();
            checkEmail(formElement.email);
            saveEmailtoCache(); //saveEmail prima di route change per salvare nel local storage ma anche prima di login, così che possa trovare la mail nel local storage ed aggiornare!!!
            login();
            onClickLogin();
          }}
        >
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            required
            onInput={validateEmail}
            // stato della mail aggiorna il valore così
            onChange={event => setEmail(event.target.value)}
          ></input>
          <Button className="btn btn-dark" type="submit" id="submitBtn"disabled onClick={onClickLogin}>
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
