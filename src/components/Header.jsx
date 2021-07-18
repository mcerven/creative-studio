import React from 'react';
import styled from 'styled-components';
import deviceBreakpoints from '../utils/device-breakpoints';
import ContactButton from './ContactButton';

export function Header() {
  return (
    <Container className="container-fluid">
      <div style={{fontWeight: 600}}>CREATIVE</div>
      <Navigation>
        <ul>
          <li><a className="link" href="#work">Work</a></li>
          <li><a className="link" href="#services">Services</a></li>
          <li><a className="link" href="#about">About us</a></li>
        </ul>
      </Navigation>
      <ContactButton />
    </Container>
  )
}

const Container = styled.header`
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

const Navigation = styled.div`
  & ul {
    display: flex;
    gap: 3rem;
  }

  & li {
    list-style-type: none;
  }

  & a {
    font-weight: 600;
  }

  @media ${deviceBreakpoints.mobileAndLess} {
    display: none;
  }
`;
