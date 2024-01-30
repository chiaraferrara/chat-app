/** @format */

import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  margin: 'auto',
  textAlign: 'center',
}));

export const ChatBox = styled.div(() => ({
  margin: '60px auto',
  background: '#ffffff',
  padding: '0',
  borderColor: '#000000',
  borderRadius: '7px',
  width: '300px',
}));

export const MessageContainer = styled.div<{ isMyMessage: boolean }>(props => ({
  padding: '4px',
  margin: '4px 0',
  border: '1px solid #ccc',
  borderRadius: props.isMyMessage ? '8px 0 8px 8px' : '0 8px 8px 8px',
  fontSize: '0.9em',
  background: props.isMyMessage ? '#42a5f5' : '#f4f4f4',
  color: props.isMyMessage ? '#ffffff' : '#000000',
  float: props.isMyMessage ? 'right' : 'left',
}));
