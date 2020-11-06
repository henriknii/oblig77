import React from 'react';
import {
  Container,
  Heading,
  DivWithChildren,
  Button,
  ReferenceButton,
  AlertButton,
  InfoButton,
  DynamicProps,
  AnimatedItem,
  StyledInput,
  Paragraph,
} from '../../styled/Styled';

const NoMatch = () => (
  <Container>
    <h2>404</h2>
    <p>Men du kan få se alle styled components jeg har laget ;)</p>
    <br />
    <Heading>Heading styling</Heading>
    <DivWithChildren>
      <div>Denne boksen flekser</div>
      <div>Denne boksen flekser</div>
      <div>Denne boksen flekser</div>
      <div>Denne boksen flekser</div>
    </DivWithChildren>
    <ReferenceButton>
      <Button>Base button som får hover fra ReferenceButton</Button>
    </ReferenceButton>
    <AlertButton>AlertButton kommer fra Base</AlertButton>
    <InfoButton>InfoButton kommer fra Base</InfoButton>
    <DynamicProps active>DynamicProps med active prop</DynamicProps>
    <DynamicProps active={false}>DynamicProps med active prop</DynamicProps>
    <AnimatedItem>Div som animerer</AnimatedItem>
    <StyledInput disabled={false} placeholder="Disabled button" />
  </Container>
);

export default NoMatch;
