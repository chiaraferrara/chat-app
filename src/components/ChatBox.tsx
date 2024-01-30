/** @format */

import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  margin: 'auto',
  textAlign: 'center',
}));

export const ChatBox = styled.div(() => ({
  margin: '60px auto',
  background: '#ffffff',
  padding: '13',
  borderColor: '#000000',
  borderRadius: '7px',
  width: '300px',
  boxShadow: '6px 4px 20px 0px #0000002e',
}));

export const MessageContainer = styled.div<{ isMyMessage: boolean }>(props => ({
  padding: '14px',
  margin: '4px 0',
  border: '1px solid #ccc',
  borderRadius: props.isMyMessage ? '8px 0 8px 8px' : '0 8px 8px 8px',
  fontSize: '0.9em',
  background: props.isMyMessage ? '#4395e3' : '#f4f4f4',
  color: props.isMyMessage ? '#ffffff' : '#000000',
  float: props.isMyMessage ? 'right' : 'left',
}));

export const Wrapper = styled.div(() => ({
  background: '#fff',
}));
