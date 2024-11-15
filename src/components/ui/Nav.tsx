import { Link } from "react-router-dom";
import StyledNav from "./styles/StyledNav";

interface Page {
    label: string;
    path: string;
}

interface NavProps {
    type: "header" | "footer";
    pages: Page[];
}

const Nav: React.FC<NavProps> = ({ type, pages }) => {
    return (
        <StyledNav type={type}>
            {pages.map((page) => (
                <Link
                    key={`${page.label}-page`}
                    aria-label={page.label}
                    className="nav-link"
                    to={page.path}
                >
                    {page.label}
                </Link>
            ))}
        </StyledNav>
    );
};

export default Nav;
