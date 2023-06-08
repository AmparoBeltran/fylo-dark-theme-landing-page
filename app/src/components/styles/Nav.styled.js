import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;

  img {
    width: 30%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 10%;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 1em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      gap: 4em;
    }
  }
`;
