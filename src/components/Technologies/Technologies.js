import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider /> 
    <br />
    <SectionTitle> Technologies </SectionTitle>
    <SectionText>
    n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage

    </SectionText>

    <List>
        <ListItem>
          <DiReact size="3rem" /> 
          <ListContainer>
              <ListTitle> Front-End</ListTitle>
              <ListParagraph>
                Experience with <br />
                React.js
              </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiFirebase size="3rem" /> 
          <ListContainer>
              <ListTitle> Back-End</ListTitle>
              <ListParagraph>
                Experience with <br />
                Node.js and Databases
              </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiZend size="3rem" /> 
          <ListContainer>
              <ListTitle> UI/UX</ListTitle>
              <ListParagraph>
                Experience with <br />
                tools like Figma
              </ListParagraph>
          </ListContainer>
        </ListItem>

        
    </List>
  </Section>
);

export default Technologies;
