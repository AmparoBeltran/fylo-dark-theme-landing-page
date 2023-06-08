import { NavStyled } from "./styles/Nav.styled";

export default function Nav() {
    return (
        <NavStyled>
            <img src="/images/logo.svg" alt="company logo" />
            <div className="menu">
                <a href="#">Features</a>
                <a href="#">Team</a>
                <a href="#">Sign In</a>

            </div>
        </NavStyled>
    )
}