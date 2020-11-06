import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
`;

export const Error = styled.div`
  color: ${(props) => props.theme.colors.warning};
`;

export const Heading = styled.h1`
  color: ${({ theme: { colors } }) => colors.default};
`;

export const DivWithChildren = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    max-width: 350px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    border: 1px solid red;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: black;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 2rem;
  padding: 2rem;
  margin: 2rem 0;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const ReferenceButton = styled.div`
  margin-top: 2rem;
  ${Button}:hover {
    color: red;
  }
`;

export const AlertButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.warning};
`;

export const InfoButton = styled(Button)`
  color: white;
  background-color: ${(props) => props.theme.colors.info};
`;

export const DynamicProps = styled.a`
  display: block;
  margin-top: 2rem;
  border: ${(props) => props.active && '1px solid blue'};
  opacity: ${(props) => (props.active ? '0' : '1')};
  transform: all 300 ease;
`;

const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const AnimatedItem = styled.div`
  margin-top: 2rem;
  animation: ${slideIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  border-radius: 5px;
  padding: 20px;
`;

const DisabledInput = css`
  color: #ccc;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  color: #fff;
  background-color: #ddd;
  margin-bottom: 1rem;
  padding: 1.2rem;
  font-size: 1.6rem;
  border-radius: 3px;
  border: none;
  &::placeholder {
    color: #000;
  }

  &:focus {
    background-color: #000;
  }

  ${(props) => props.disabled && DisabledInput}
`;

export const SuccessButton = styled(Button)`
  width: 200px;
  height: 50px;
  font-size: 3rem;
  ${(props) =>
    props.$success
      ? css`
          background-color: ${props.theme.colors.success};
          :hover {
            filter: brightness(1.5);
          }
        `
      : ''}
`;

// Polymorphisme

/*

function Contact() {
  return (
    <Paragraph as="div">
      <h1>Paragraphstyling with div HTML-tag</h1>
    </Paragraph>
  );
}

*/

// debugging

// https://styled-components.com/docs/tooling
