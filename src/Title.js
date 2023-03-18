import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

const Title = ({ content }) => {
  return <TitleWrapper>{content}</TitleWrapper>;
};

export default Title;
