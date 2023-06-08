import styled from "styled-components";

export const FeaturesSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3em;
  margin-top: 100px;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: 500px 500px;
    column-gap: unset;
    row-gap: 6em;
    justify-content: center;
    align-items: flex-end;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    text-align: center;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      max-width: 500px;
    }

    img {
      width: 15%;
    }

    h2,
    p {
      padding: 0.3em 0.8em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        padding-inline: 2.5em;
      }
    }

    h2 {
      font-size: 1.2em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.5em;
      }
    }

    p {
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.1em;
      }
    }
  }
`;
