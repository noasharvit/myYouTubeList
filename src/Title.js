import React from 'react'
import styled from 'styled-components'

export default function Title({content}) {

  // Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
font-size: 1.5em;
text-align: left;
color: palevioletred;
`;



  return (
      <Title>
      {content}
      </Title>
  )
}