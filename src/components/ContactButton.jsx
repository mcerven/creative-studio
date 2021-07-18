import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Link = styled.a`
  color: inherit;
`;

export default function ContactButton() {
  return (
    <Button>
      <Link href="#contact">Contact us</Link>
    </Button>
  );
}
