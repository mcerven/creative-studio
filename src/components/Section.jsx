import React from 'react';
import styled from 'styled-components';

export default function Section({ children }) {
  return (
    <PageSection>
      <div className="section-inner container-fluid">
        {children}
      </div>
    </PageSection>
  );
}

const PageSection = styled.section`
  min-height: 20rem;
  padding-top: 10rem;

  & .section-inner {
    margin: 0 auto;
    height: 100%;
    max-width: 86rem;
  }
`;
