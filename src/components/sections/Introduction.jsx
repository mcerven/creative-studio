import React from 'react';
import styled from 'styled-components';

export default function Introduction() {
  return (
    <Container>
      <Title className="heading">
        <span className="highlight">Creative</span> studio for world-class brands *
      </Title>
      <p>* And for the ones with grand ambitions</p>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 600;
  letter-spacing: .02em;
`;