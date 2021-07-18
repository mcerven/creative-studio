import styled from 'styled-components';

const Button = styled.div`
  position: relative;
  border: 1px solid var(--highlightColor);
  border-radius: 2rem;
  background-color: var(--highlightColor);
  padding: .55rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  overflow: hidden;
  color: var(--highlightContrastColor);
  cursor: pointer;
  text-transform: uppercase;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: var(--highlightContrastColor);
    color: var(--highlightColor);
    transform: scale(1.04);
  }
`;

export default Button;