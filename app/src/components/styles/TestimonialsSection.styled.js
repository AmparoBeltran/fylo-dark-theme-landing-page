import styled from "styled-components";

export const TestimonialsSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  margin-top: 100px;
  padding: 1.5em;
  background-image: url("/images/bg-quotes.png");
  background-repeat: no-repeat;
  background-position-x: 30px;
  background-position-y: -10px;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: 400px 400px 400px;
    justify-content: center;
    align-items: flex-end;
    background-position: 325px 0;
    height: 25vh;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5em;
    background-color: ${({ theme }) => theme.colors.testimonialsBackground};
    border-radius: 5px;
    border: none;
    padding: 2em 1.5em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      max-width: 500px;
    }
    p {
      font-size: 0.8em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.1em;
      }
    }

    .profile {
      display: flex;
      align-items: center;
      gap: 1em;
      img {
        border-radius: 100%;
        width: 35px;
        height: 35px;
      }
      .author {
        display: flex;
        flex-direction: column;

        span {
          font-size: 1em;
          font-weight: 700;
        }
      }
    }
  }
`;
