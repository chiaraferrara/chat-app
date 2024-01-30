/** @format */

import React from 'react';
import { utilityClearEmail, utilityGetUserLogged } from '../utilities';
import Chat from './Chat';

function Welcome({ onClickLogout }: { onClickLogout: () => void }) {
  const email = localStorage.getItem('email');

  const currentUser = utilityGetUserLogged();
  if (currentUser) {
    if (currentUser.counter > 1) {
      return (
        <>
          <nav className="navbar bg-dark border-bottom border-body">
            {' '}
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                utilityClearEmail();
                onClickLogout();
              }}
            >
              Logout
            </button>
          </nav>
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
          <Chat/>
        </>
      );
    } else {
      return (
        <>
          <nav className="navbar bg-dark border-bottom border-body">
            {' '}
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                utilityClearEmail();
                onClickLogout();
              }}
            >
              Logout
            </button>
          </nav>
          <div className="container">
            <h1>
              Benvenut* <br /> {email}
            </h1>
            <p>Primo accesso: {currentUser.lastLogged}</p> <br />
          </div>

          <Chat/>
        </>
      );
    }
  }
  return <div>Utente non valido</div>;
}

export default Welcome;
