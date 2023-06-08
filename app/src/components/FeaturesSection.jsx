import { dataFeatures } from "../data";
import { FeaturesSectionStyled } from "./styles/FeaturesSection.styled";

export default function FeaturesSection() {
    return (
        <FeaturesSectionStyled>
            {dataFeatures.map((item) => (
                <article key={item.title}>
                    <img src={item.img} alt={item.title} />
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </article>
            ))}
        </FeaturesSectionStyled>
    )
}