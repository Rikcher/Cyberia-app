import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Page {
    label: string;
    path: string;
}

interface NavProps {
    pages: Page[];
}

const Nav: React.FC<NavProps> = ({ pages }) => {
    const { t } = useTranslation();
    return (
        <>
            {pages.map((page) => (
                <li>
                    <Link
                        key={`${page.label}-page`}
                        aria-label={page.label}
                        className="nav-link"
                        to={page.path}
                    >
                        {t(page.label)}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default Nav;
