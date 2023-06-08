
import { Form } from "./Form";
import { CtaSectionStyled } from "./styles/CtaSection.styled";

export default function CtaSection() {

    return (
        <CtaSectionStyled>
            <div className="cta-description">
                <h2>Get early access today</h2>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                    questions, our support team would be happy to help you.</p>
            </div>
            <Form />
        </CtaSectionStyled>
    )
}