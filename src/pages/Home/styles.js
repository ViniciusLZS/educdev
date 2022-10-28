import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  gap: 10rem;

  @media (min-width: 60rem) {
    gap: 5rem;
    flex-direction: ${props => props.pathname.length === 1 ? 'row' : 'column'};
    gap: 3rem;
  }
`;
