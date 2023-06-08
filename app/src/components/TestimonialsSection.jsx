import { dataTestimonials } from "../data";
import { TestimonialsSectionStyled } from "./styles/TestimonialsSection.styled";

export default function TestimonialsSection() {
    return (
        <TestimonialsSectionStyled>
            {dataTestimonials.map((item) => (
                <article key={item.author}>
                    <p>{item.testimonial}</p>
                    <div className="profile">
                        <img src={item.avatar} alt={item.author} />
                        <div className="author">
                            <span>{item.author}</span>
                            <small>{item.role}</small>
                        </div>
                    </div>
                </article>
            ))}
        </TestimonialsSectionStyled>
    )
}