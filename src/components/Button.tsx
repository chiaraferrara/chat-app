/** @format */

import styled from '@emotion/styled';

export const Button = styled.button(() => ({
  backgroundColor: '#4395e3',
  color: '#fff',
  margin: '0px',
  bottom: '5px',
//   borderRadius: '5px 0px 5px 0px',
  cursor: 'pointer',
  fontSize: '15px',
  border: '1px solid #ffffff',
}));

export const Textarea = styled.textarea(() => ({
  backgroundColor: 'transparent',
  color: '#000000',
  fontSize: '.9rem',
  overflow: 'hidden',
  overflowY: 'auto',
  border: 'none',
  margin: '0',
  minHeight: '50px',
  minWidth: '300px',
  //questo per eliminare l'outline una volta cliccato sulla textarea
  outline: 'none',
  '&:focus': {
    border: 'none',
  },
}));

export const DeleteButton = styled.button(() => ({
  backgroundColor: 'transparent',
  color: '#fff',
  padding: '0',
  fontSize: '15px',
  border: 'transparent',
}));
