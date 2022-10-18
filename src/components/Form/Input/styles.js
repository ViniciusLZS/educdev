import styled from 'styled-components';

export const Label = styled.label`
  padding-left: 1rem;
  padding-bottom: 1rem;
`;
export const Input = styled.input`
  color: ${(props) => props.theme.colorPrimary};
  margin-bottom: 2rem;
  border: 2px solid ${(props) => props.theme.grayPrimary};
  display: block;
  width: 100%;
  font-size: 1.6rem;
  background: ${(props) => props.theme.backgroundPrimary};
  padding: 1rem;
  border-radius: 10px;
  transition: 0.2s;


  &:focus, :hover {
    color: black;
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellowLight};
    outline: none;
    border: 1px solid ${(props) => props.theme.yellowDark};
    background: ${(props) => props.theme.colorPrimary};
  }
`;
