import React from 'react';
import Section from './Section';
import Introduction from './sections/Introduction';
import OurWork from './sections/OurWork';

export function Main() {
  return (
    <>
      <Section>
        <Introduction />
      </Section>
      <Section>
        <OurWork />
      </Section>
    </>
  );
}
