import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  padding: 1rem;
  left: 2rem;
  top: 3rem;

  svg{
    rotate: 180deg;
  }

  @media(min-width: 60rem){
    display: none;
  }
`;