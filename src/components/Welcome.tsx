/** @format */

import React from 'react';
import { utilityGetUserLogged } from '../utilities';

function Welcome() {
  const email = localStorage.getItem('email');

  const currentUser = utilityGetUserLogged();
  if (currentUser) {
    if (currentUser.counter > 1) {
      return (
        <>
          <nav className="navbar bg-dark border-bottom border-body">{/* <LogoutButton /> */}</nav>
          <div className="container">
            <h2>
              Bentornat* <br /> {email}
            </h2>
            <div>
              Sei stato qui {currentUser.counter} volte
              <br />
              <p>Ultimo accesso: {currentUser.previousAccess}</p> <br />
              <p>Ultimissimo accesso: {currentUser.lastLogged}</p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <nav className="navbar bg-dark border-bottom border-body">{/* <LogoutButton /> */}</nav>
          <div className="container">
            <h1>
              Benvenut* <br /> {email}
            </h1>
            <p>Primo accesso: {currentUser.lastLogged}</p> <br />
          </div>
        </>
      );
    }
  }
  return <div>Utente non valido</div>;
}

export default Welcome;
