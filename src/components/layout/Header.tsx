import StyledHeader from "./styles/StyledHeader";
import Logo from "../ui/Logo";
import Nav from "../ui/Nav";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Logo width={8.125} />
            <Nav
                type="header"
                pages={[
                    { label: "Агентсво", path: "/agency" },
                    { label: "Услуги", path: "/services" },
                    { label: "Кейсы", path: "/cases" },
                    { label: "Блог", path: "/blog" },
                    { label: "Контакты", path: "/contacts" },
                ]}
            />
            <p style={{ color: "white" }}>EN/RU</p>
        </StyledHeader>
    );
};

export default Header;
