import styled from "styled-components";

export const BoxLogo = styled.div`
  @media (min-width: 60rem) {
    padding: 12rem;
  }
`;

export const TitleH1 = styled.h1 `
  color: transparent;
  position: absolute;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 4rem;
  text-decoration: none;
  color: ${props=> props.theme.colorPrimary};
  @media (min-width: 60rem) {
    margin-bottom: 1rem;
  }
  @media (max-width: 60rem) {
    display: none;
  }
`;

export const Span = styled.span`
  display: block;
  text-align: center;
`;