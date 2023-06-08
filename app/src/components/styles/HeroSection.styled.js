import styled from "styled-components";

export const HeroSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  margin-top: 50px;
  img {
    width: 100%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 40%;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    text-align: center;
    padding: 0.5em;
    background-image: url("/images/bg-curvy-mobile.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      background-image: url("/images/bg-curvy-desktop.svg");
      width: 45vw;
    }
    h1 {
      font-size: 2em;
      line-height: 1.2em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 2.6em;
        line-height: 1.4em;
        padding-inline: 2em;
      }
    }
    p {
      font-size: 1em;
      padding: 0.5em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.4em;
        padding: 1em 6em;
        line-height: 1.3em;
      }
    }
    button {
      margin-top: 20px;
    }
  }
`;
