/** @format */

import React from 'react';

function LogoutButton() {
    const clearEmail = () => {
       localStorage.removeItem('email');
      };
  return (
    <>
     <button type="button" className="btn btn-dark" onClick={clearEmail}>
      Logout
    </button>
    </>
  );
}

export default LogoutButton;
