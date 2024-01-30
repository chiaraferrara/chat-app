/** @format */

import React from 'react';
import { utilityClearEmail, utilityGetUserLogged } from '../utilities';
import Chat from './Chat';
import { Button } from './Button';
import { Container } from './ChatBox';

function Welcome({ onClickLogout }: { onClickLogout: () => void }) {
  const email = localStorage.getItem('email');

  const currentUser = utilityGetUserLogged();
  if (currentUser) {
    if (currentUser.counter > 1) {
      return (
        <>
          <nav className="navbar bg-dark border-bottom border-body">
            {' '}
            <Button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                utilityClearEmail();
                onClickLogout();
              }}
            >
              Logout
            </Button>
          </nav>
          <Container>
            <h2>
              Welcome Back <br /> {email}
            </h2>
            <div>
              You've been here {currentUser.counter} times!
              <br />
              <p>Last seen: {currentUser.previousAccess}</p> <br />
            </div>
          </Container>
          <Chat />
        </>
      );
    } else {
      return (
        <>
          <nav className="navbar bg-dark border-bottom border-body">
            {' '}
            <Button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                utilityClearEmail();
                onClickLogout();
              }}
            >
              Logout
            </Button>
          </nav>
          <Container>
            <h1>
              Welcome <br /> {email}
            </h1>
            <p>First login: {currentUser.lastLogged}</p> <br />
          </Container>

          <Chat />
        </>
      );
    }
  }
  return <div>Utente non valido</div>;
}

export default Welcome;
