import { Link } from "react-router-dom";

interface Page {
    label: string;
    path: string;
}

interface NavProps {
    pages: Page[];
}

const Nav: React.FC<NavProps> = ({ pages }) => {
    return (
        <>
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
        </>
    );
};

export default Nav;
