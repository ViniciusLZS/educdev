import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;

  @media (min-width: 60rem) {
    border: 2px solid ${(props) => props.theme.grayPrimary};
    width: 42rem;
    height: auto;
    padding: 1rem 4rem 3rem 4rem;
    border-radius: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  height: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 500;

  background: linear-gradient(
    270deg,
    ${(props) => props.theme.yellowDark} 0%,
    ${(props) => props.theme.yellowLight} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: -1px 0px 4px rgba(242, 159, 5, 0.25);
`;
