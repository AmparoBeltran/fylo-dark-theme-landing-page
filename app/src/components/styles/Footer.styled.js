import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.footerBackground};
  padding: 2em;
  justify-content: center;
  text-align: left;
  gap: 2em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 11em 2em 5em;
    display: grid;
    gap: 5em;
  }
  img {
    width: 50%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 7%;
    }
  }

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2em;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      flex-direction: row;

      gap: 15em;
    }
  }

  .contact-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      flex-direction: row;
      gap: 5em;
    }
    .contact {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        gap: 1.8em;
      }
    }
    .contact-location {
      display: flex;
      align-items: top;
      gap: 1em;
      img {
        margin-top: 5px;
        width: 15px;
        height: 15px;
      }

      @media (min-width: ${({ theme }) => theme.desktop}) {
        max-width: 500px;
        line-height: 1.5;
        img {
          margin-top: 10px;
          width: 20px;
          height: 20px;
        }
        p {
          font-size: 1.5em;
        }
      }
    }
    .contact-details {
      display: flex;
      align-items: center;
      gap: 1em;
    }
    img {
      width: 15px;
      height: 15px;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        width: 20px;
        height: 20px;
      }
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      span {
        font-size: 1.2em;
      }
    }
  }

  .footer-nav-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      flex-direction: row;
      gap: 5em;
      a {
        text-decoration: none;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        gap: 1.5em;
      }
    }
  }

  .social {
    display: flex;
    justify-content: center;
    gap: 1em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      gap: 1.5em;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border: 1px solid white;
      border-radius: 100%;
      padding: 0.5em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        width: 40px;
        height: 40px;
        padding: 0.5em;
      }
      &:hover {
        color: hsl(120deg 88.47% 41.63%);
        width: 40px;
        height: 40px;
        border: 1px solid hsl(120deg 88.47% 41.63%);
        border-radius: 100%;
        padding: 0.5em;
      }
    }
  }
`;
