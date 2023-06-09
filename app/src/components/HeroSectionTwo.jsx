import { HeroSectionTwoStyled } from "./styles/HeroSectionTwo.styled";

export default function HeroSectionTwo() {
    return (
        <HeroSectionTwoStyled>

            <img src="/images/illustration-stay-productive.png" alt="illustration intro" />

            <article>
                <h2>Stay productive, wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>

                <div>
                    <a href="#">See how Fylo works</a>
                    <span><img src="/images/icon-arrow.svg" alt="arrow-icon" /></span>
                </div>
            </article>
        </HeroSectionTwoStyled>
    )
}