import styled from "styled-components";

export const HeroSectionTwoStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  margin-top: 100px;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    justify-content: center;
  }
  img {
    width: 100%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 40%;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5em;
    text-align: left;
    padding: 0.5em;
    max-width: 600px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      gap: 1.8em;
    }
    h2 {
      font-size: 1.2em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 3.5em;
        line-height: 1em;
      }
    }
    p {
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.2em;
      }
    }
    div {
      display: flex;
      align-items: center;
      gap: 0.5em;
      border-bottom: 1px solid hsl(176, 68%, 64%);

      a {
        color: hsl(176, 68%, 64%);
      }
      img {
        @media (min-width: ${({ theme }) => theme.desktop}) {
          width: 100%;
        }
      }
    }
  }
`;
