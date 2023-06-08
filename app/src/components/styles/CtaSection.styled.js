import styled from "styled-components";

export const CtaSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3em;
  margin: 100px 2em;
  background-color: ${({ theme }) => theme.colors.testimonialsBackground};
  border-radius: 10px;
  padding: 3em 2em;
  align-items: center;
  max-width: 800px;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    gap: 1em;
    margin: 100px auto -80px;
    position: relative;
    z-index: 1;
  }

  .cta-description {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.5em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      gap: unset;
      h2 {
        font-size: 2em;
      }
      p {
        padding: 2em;
      }
    }
  }

  .cta-form {
    button {
      padding: 1em 3em;
    }
  }
`;
