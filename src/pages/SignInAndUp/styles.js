import styled from "styled-components";

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