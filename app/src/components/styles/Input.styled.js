import styled from "styled-components";

export const InputStyled = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50px;
  display: block;
  width: 100%;
  padding: 1em 2em 1em 2em;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    min-width: 400px;
  }
`;
