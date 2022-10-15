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

export const BoxLogo = styled.div`
  @media (min-width: 60rem) {
    padding: 12rem;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 4rem;

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

export const BoxLog = styled.div`
  text-align: center;
  gap: 2rem;

  @media (min-width: 60rem) {
    width: 42rem;
    padding: 8rem;
    border: 2px solid ${(props) => props.theme.grayPrimary};
    border-radius: 10px;
  }
`;

export const ContentLog = styled.div`
  margin-bottom: 3rem;
`;

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : `1.2rem`)};
  padding-bottom: 2rem;
`;

export const LinkLog = styled.a`
  font-weight: 500;
  font-size: 3rem;

  background: linear-gradient(270deg, #f29f05 0%, #f2b90f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: -1px 0px 5px rgba(242, 159, 5, 0.25);
`;
