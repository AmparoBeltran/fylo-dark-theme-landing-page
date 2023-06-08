import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    gap: 1em;
  }

  p {
    display: flex;
    gap: 0.5em;
    align-items: center;
    margin-top: 10px;
    color: hsl(120deg 88.47% 41.63%);
  }

  .error {
    color: red;
    svg {
      margin-top: 4px;
    }
  }
`;
