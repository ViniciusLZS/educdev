import styled from 'styled-components';

export const Label = styled.label`
  padding-left: 1rem;
`;

export const Opicional = styled.span`
  font-size: 1rem;
`;

export const Box = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;

  svg {
    position: absolute;
    left: 1.4rem;
    bottom: 1.3rem;
  }
  &:hover svg {
    path {
      fill: ${(props) => props.theme.yellowDark};
    }
  }
`;

export const Input = styled.input`
  color: ${(props) => props.theme.colorPrimary};
  border: 2px solid ${(props) => props.theme.grayPrimary};
  width: 100%;
  height: 4.5rem;
  font-size: 1.6rem;
  background: ${(props) => props.theme.backgroundPrimary};
  padding-left: 4rem;
  padding-right: 4rem;
  border-radius: 10px;
  transition: 0.2s;

  &:focus,
  :hover {
    color: black;
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellowLight};
    outline: none;
    border: 1px solid ${(props) => props.theme.yellowDark};
    background: ${(props) => props.theme.colorPrimary};
  }
`;

export const BoxIcon = styled.div`
  display: block;

  path {
    fill: ${(props) => (props.isFocused ? props.theme.yellowDark : '')};
  }
`;
