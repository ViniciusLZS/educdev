import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 5rem;

  @media (min-width: 60rem) {
    border: 2px solid ${(props) => props.theme.grayPrimary};
    width: 42rem;
    height: auto;
    padding: 1rem 4rem 3rem 4rem;
    border-radius: 10px;
  }
`;

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

export const Title = styled.h1``;

export const Paragraph = styled.p``;

export const Span = styled.span`
  color: ${(props) => props.theme.yellowDark};
`;

export const Warning = styled.span`
  font-size: 1rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  height: 100%;
  button{
    margin-top: 5rem;
  }
    @media (min-width: 60rem) {
      margin-top: 0;
      margin-bottom: 0;
    }
`;

export const label = styled.label`
  padding: 1rem;
`;

export const Select = styled.select`

`;