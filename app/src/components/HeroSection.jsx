import { HeroSectionStyled } from "./styles/HeroSection.styled";

export default function HeroSection() {
    return (
        <HeroSectionStyled>

            <img src="/images/illustration-intro.png" alt="illustration intro" />

            <article>
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever
                    you need, share and collaborate with friends family, and co-workers.</p>
                <button>Get Started</button>
            </article>
        </HeroSectionStyled>
    )
}