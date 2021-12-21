import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Hi I am 
      Russell Bill <br /> Web Developer
      </SectionTitle>
      <SectionText>
      rem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> Learn More
      </Button>
    </LeftSection>

  </Section>
);

export default Hero;