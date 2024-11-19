import { MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Page {
    label: string;
    path: string;
}

interface NavProps {
    pages: Page[];
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const Nav: React.FC<NavProps> = ({ pages, onClick }) => {
    const { t } = useTranslation();
    return (
        <>
            {pages.map((page) => (
                <li key={`${page.label}-page`}>
                    <Link
                        aria-label={page.label}
                        className="nav-link"
                        to={page.path}
                        onClick={onClick}
                    >
                        {t(page.label)}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default Nav;
