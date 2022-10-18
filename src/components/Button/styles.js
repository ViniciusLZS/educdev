import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin-top: 1rem;
  border: none;
  width: 100%;
  font-size: 1.6rem;
  padding: 1rem;
  border-radius: 10px;
  transition: 0.2s;
  color: white;
  font-weight: 500;

  background: linear-gradient(270deg, #f29f05 0%, #f2b90f 100%);
  box-shadow: -2px 3px 10px rgba(242, 159, 5, 0.25);
  border-radius: 10px;

  &:hover {
    background: linear-gradient(270deg, #f29f05 0%, #f2b90f 30%);
    box-shadow: -2px 3px 15px rgba(242, 159, 5, 0.25);
    border-radius: 10px;
    transition: 0.2s;
  }
`;
