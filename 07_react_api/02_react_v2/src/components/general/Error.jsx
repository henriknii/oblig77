import React from 'react';
import { Error as StyledError } from '../../styled/Styled';

const Error = ({ message }) => (
  <StyledError>
    <p>{message}</p>
  </StyledError>
);

export default Error;
