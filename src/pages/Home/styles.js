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
    flex-direction: row;
    gap: 3rem;
  }
`;
