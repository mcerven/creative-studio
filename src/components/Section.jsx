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
  min-height: 100vh;
  flex: 1 1 auto;
  padding-top: 6rem;
  display: flex;

  & .section-inner {
    margin: 0 auto;
    max-width: 86rem;
  }
`;
