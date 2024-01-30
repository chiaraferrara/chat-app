/** @format */

import React from 'react';
import LogoutButton from './LogoutButton';
import { utilityGetUserLogged } from '../utilities';

function Header() {
    const currentUser = utilityGetUserLogged();
    if(currentUser){
  return (
    <>
      <LogoutButton />
    </>
  );}
  return(
    <div></div>
  )
}

export default Header;
