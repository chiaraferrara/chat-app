/** @format */

export const utilityGetLoggedEmail = (): string => {
  const loggedEmail = localStorage.getItem('email');
  console.log(`L'e-mail dell'utente loggato:` + loggedEmail);
  return loggedEmail || '';
};

export interface User {
  email: string;
  lastLogged: string;
  previousAccess: string | null;
  counter: number;
}

export const utilityGetUserLogged = (): User | undefined => {
  const emailLogged = utilityGetLoggedEmail();
  console.log('GetUserLogged by Email:' + emailLogged);
  const prevUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]'); //anche se è null ritornerà un array vuoto
  const user = prevUsers.find(user => user.email === emailLogged);
  return user;
};

export const utilityClearEmail = () => {
  localStorage.removeItem('email');
};

export const utilityIsUserInLocalStorage = (): boolean => {
  const email = utilityGetLoggedEmail();
  const prevUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  console.log('Email loggata:', email);

  console.log('Utenti nel localStorage:', prevUsers);
  const user = prevUsers.find(user => user.email === email);
  console.log('Utente trovato:', user);

  return !!user;
};

export const isUserLogged = (): boolean => {
  const user = localStorage.getItem('email');
  if (user) {
    console.log("C'è qualcuno loggato: " + utilityGetLoggedEmail());
    return true;
  } else {
    return false;
  }
};
