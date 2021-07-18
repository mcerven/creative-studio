import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import deviceBreakpoints from '../utils/device-breakpoints';
import debounce from '../utils/debounce';
import ContactButton from './ContactButton';

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;

      const minScroll = 40;
      const isScrollingUp = prevScrollPos - currentScrollPos > minScroll;
      const alwaysVisibleAt = 100;

      setVisible(isScrollingUp || currentScrollPos < alwaysVisibleAt);
      setPrevScrollPos(currentScrollPos);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <Container className={`container-fluid ${visible ? '' : 'hidden'}`} visible={visible}>
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
  --height: 4.5rem;
  height: var(--height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, .95);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: top 200ms ease-in-out;

  &.hidden {
    top: calc(-1 * var(--height));
  }
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
