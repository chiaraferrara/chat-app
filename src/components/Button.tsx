/** @format */

import styled from '@emotion/styled';

export const Button = styled.button(() => ({
  backgroundColor: '#42a5f5',
  color: '#fff',
  margin: '2px',
  bottom: '5px',
  borderRadius: '5px 0px 5px 0px',
  cursor: 'pointer',
  fontSize: '20px',
  border: '1px solid #ffffff',
}));

export const Textarea = styled.textarea(() => ({
  backgroundColor: '#ffffff',
  color: '#000000',
  fontSize: '.9rem',
  padding: '1rem',
  overflow: 'hidden',
  overflowY: 'auto',
  border: 'none',
  margin: '0',
  minHeight: '50px',
  width: '100%',

  //questo per eliminare l'outline una volta cliccato sulla textarea
  outline: 'none',
  '&:focus': {
    border: 'none',
  },
}));
